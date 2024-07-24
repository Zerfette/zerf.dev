import { HTMLAttributes } from 'react'
import z from 'zod'

export const variants: [string, ...string[]] = [
  'basic',
  'withDivider',
]

export const Variant = z.enum(variants)
type Variant = typeof Variant

export const isVariant = (variant: string) => (x: string) =>
  x === variant

export const Props = z.object({ variant: Variant })
export type Props = HTMLAttributes<HTMLDivElement> &
  z.infer<typeof Props>
