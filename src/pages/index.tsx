import styles from './../styles/pages/index/form.module.css'

import { useState, FormEvent, useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../contexts/AuthContext'



export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
        <button type="submit" className={styles.callToAction}>
          Login
        </button>

        <Link href="/registrar">
          <button className={styles.secondcallToAction} >Registrar-se</button>
        </Link>
      </form>
    </main>
  )
}