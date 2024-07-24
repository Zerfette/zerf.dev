import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { map } from 'fp-ts/lib/Array'
import { Card, SectionHeading } from '~/lib/components'
import { Heading } from '~/lib/typography'
import { talks } from './model'
import { Talk } from './types'

const toTalk = ({ title, description, video }: Talk) => (
  <li key={title}>
    <Card variant="withDivider" className="m-6">
      <div className="flex items-center justify-center">
      <Heading level="h3" className="text-center m-4">
        {title}
      </Heading>
      {video && (
        <a href={video}>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
          />
        </a>
      )}
      </div>
      <p className="p-8"> {description}</p>
     
    </Card>
  </li>
)

export const Talks = () => (
  <>
    <SectionHeading variant="simple" className="mt-12" id="talks">
      <Heading level="h3">Talks</Heading>
    </SectionHeading>
    <ul role="list" className="grid grid-cols-1 xl:grid-cols-3">
      {map(toTalk)(talks)}
    </ul>
  </>
)
