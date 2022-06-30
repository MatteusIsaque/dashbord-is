import { AxiosError } from "axios";
import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { setupAPIClient } from "../services/api";

type User = {
  name: string
  email: string
  admin: boolean
  employee: boolean
  position: string[]
  tasks: string[]
}

type SignInCredentials = {
  name?: string
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  signUp(credentials: SignInCredentials): Promise<void>
  user: User | undefined
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  destroyCookie(undefined, 'isaquesestudios.token')
  destroyCookie(undefined, 'isaquesestudios.refreshToken')

  Router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'isaquesestudios.token': token } = parseCookies()


    if (token) {
      setupAPIClient('undefined').get('/profile/show/one').then(response => {

        const { name, admin, email, employee, position, tasks, } = response.data.data

        setUser({
          name,
          email,
          admin,
          employee,
          position,
          tasks,
        })
      }).catch(() => {
        // signOut()
      })
    }
  }, [])


  async function signUp({ name, email, password }: SignInCredentials) {
    try {
      const response = await setupAPIClient('undefined').post('/register', {
        name,
        email,
        password
      })

      Router.push('/')
    } catch (error) {
      console.log(error)
    }
  }



  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await setupAPIClient('undefined').post('/authenticated', {
        email,
        password
      })

      const { name, admin, employee, position, tasks, token, refreshToken } = response.data.data

      setCookie(undefined, 'isaquesestudios.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      setCookie(undefined, 'isaquesestudios.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      })

      setupAPIClient('undefined').defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUser({
        name,
        email: response.data.email,
        admin,
        employee,
        position,
        tasks,
      })

      Router.push('/perfil/')
    } catch (error) {

    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signUp, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}