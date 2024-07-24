import { map } from 'fp-ts/lib/Array'
import { Card, SectionHeading } from '~/lib/components'
import { Heading } from '~/lib/typography'
import { articles } from './model'
import classes from './style.module.css'
import { Article } from './types'

const toArticle = ({ title, link, imgSrc }: Article) => (
  <li key={title} className="m-6">
    <a href={link}>
      <Card variant="withDivider">
        <img src={imgSrc} className="w-full" />
        <Heading level="h3" className="text-center p-4">
          {title}
        </Heading>
      </Card>
    </a>
  </li>
)

export const Articles = () => (
  <>
    <SectionHeading
      variant="simple"
      className="mt-12"
      id="articles"
    >
      <Heading level="h3">Articles</Heading>
    </SectionHeading>
    <ul role="list" className={classes.list}>
      {map(toArticle)(articles)}
    </ul>
  </>
)
