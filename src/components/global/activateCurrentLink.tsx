import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'

type ActiveLinkProps = LinkProps & {
  children: ReactElement
  activeClassName: string
}

export default function activateCurrentLink({ activeClassName, children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ""

  return <Link {...rest}>{cloneElement(children, { className })}</Link>

}