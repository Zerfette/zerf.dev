import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { map } from 'fp-ts/lib/Array'
import { Card, SectionHeading } from '~/lib/components'
import { Heading } from '~/lib/typography'
import { articles } from './model'
import { Article } from './types'

const toArticle = ({ title, link, imgSrc }: Article) => (
  <li key={title}>
    <Card variant="withDivider" className="m-6">
      <img src={imgSrc} className='w-full'/>
      <a
        href={link}
        className="flex items-center justify-center flex-1 p-2"
      >
        <Heading level="h3" className="text-center m-4">
          {title}
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="xs"
            className='ml-2'
          />
        </Heading>
      </a>
    </Card>
  </li>
)

export const Articles = () => (
  <>
    <SectionHeading variant="simple" className="mt-12" id="articles">
      <Heading level="h3">Articles</Heading>
    </SectionHeading>
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {map(toArticle)(articles)}
    </ul>
  </>
)
