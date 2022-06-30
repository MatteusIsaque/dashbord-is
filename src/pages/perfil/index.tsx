import { useContext } from "react"
import ChefCard from "../../components/global/chefCard"
import { AuthContext } from "../../contexts/AuthContext"
// import { setupAPIClient } from "../../services/api"

import styles from './../../styles/pages/perfil/index.module.css'

export default function Index() {
  const { user } = useContext(AuthContext)


  return (
    <main className={styles.main}>
      <h1>ISAQUES ESTÚDIOS</h1>

      <section>
        <ChefCard />
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </section>
    </main>
  )
}