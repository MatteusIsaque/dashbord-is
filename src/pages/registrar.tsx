import styles from './../styles/pages/index/form.module.css'

import { useState, FormEvent, useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../contexts/AuthContext'


export default function Index() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useContext(AuthContext)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = {
      email,
      password,
      name
    }

    await signUp(data)
  }

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Registrar</h1>
        <input type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
        <button type="submit" className={styles.callToAction}>
          Login
        </button>

        <Link href="/">
          <button className={styles.secondcallToAction} >Login</button>
        </Link>
      </form>
    </main>
  )
}