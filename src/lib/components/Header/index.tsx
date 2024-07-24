import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { Variant, type Props } from './schema'
import classes from './style.module.css'

type Header = FC<PropsWithChildren<Props>>
export const Header: Header = ({
  children,
  className,
  variant,
}) => {
  Variant.parse(variant)
  return (
    <div className={cn(className, classes.simple)}>
      {children}
    </div>
  )
}
