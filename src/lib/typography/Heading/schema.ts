import z from 'zod'
import { HTMLAttributes } from 'react'

export const Level = z.enum([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
])

export const Props = z.object({ level: Level })
export type Props = HTMLAttributes<HTMLDivElement> &
  z.infer<typeof Props>
