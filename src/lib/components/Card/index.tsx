import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { isVariant, Variant, type Props } from './schema'
import classes from './style.module.css'

type Card = FC<PropsWithChildren<Props>>
export const Card: Card = ({
  children,
  className,
  variant,
}) => {
  Variant.parse(variant)
  const variants = {
    [classes.withDivider]: isVariant(
      Variant.Enum.withDivider
    )(variant),
  }
  return (
    <div className={cn(className, classes.card, variants)}>
      {children}
    </div>
  )
}
