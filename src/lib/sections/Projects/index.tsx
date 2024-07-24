import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { map } from 'fp-ts/lib/Array'
import { Card, SectionHeading } from '~/lib/components'
import { Heading } from '~/lib/typography'
import { projects } from './model'
import { Project } from './types'

const toProject = ({
  title,
  imgSrc,
  github,
  website,
}: Project) => (
  <li key={title}>
    <Card variant="withDivider" className="m-6">
      <div>
        <img
          alt={title}
          src={imgSrc}
          className="mx-auto h-24 "
        />
        <Heading level="h3" className="text-center m-4">
          {title}
        </Heading>
      </div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <a
          href={github}
          className="flex items-center justify-center w-0 flex-1 p-2"
        >
          <Heading level="h4" className="mr-2">
            Github
          </Heading>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
          />
        </a>
        <a
          href={website}
          className="-ml-px flex items-center justify-center w-0 flex-1 p-2"
        >
          <Heading level="h4" className="mr-2">
            Website
          </Heading>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </div>
    </Card>
  </li>
)

export const Projects = () => (
  <>
    <SectionHeading variant="simple" className="mt-12" id="projects">
      <Heading level="h3">Projects</Heading>
    </SectionHeading>
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {map(toProject)(projects)}
    </ul>
  </>
)
