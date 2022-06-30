import ActivateCurrentLink from './activateCurrentLink'

import styles from './../../styles/pages/global/nav.module.css'


export default function Nav() {

  return (
    <nav className={styles.main}>
      <ul>
        <ActivateCurrentLink href="/perfil" activeClassName='currentLink'>
          <li>
            Perfil
          </li>
        </ActivateCurrentLink>
        <ActivateCurrentLink href="/asd" activeClassName='currentLink'>
          <li>
            a
          </li>
        </ActivateCurrentLink>
        <ActivateCurrentLink href="/perfiasdl" activeClassName='currentLink'>
          <li>
            a
          </li>
        </ActivateCurrentLink>
        <ActivateCurrentLink href="/sdf" activeClassName='currentLink'>
          <li>
            a
          </li>
        </ActivateCurrentLink>
        <ActivateCurrentLink href="/gdf" activeClassName='currentLink'>
          <li>
            a
          </li>
        </ActivateCurrentLink>
        <ActivateCurrentLink href="/hgf" activeClassName='currentLink'>
          <li>
            a
          </li>
        </ActivateCurrentLink>
      </ul>
    </nav>
  )
}