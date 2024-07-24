import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { map } from 'fp-ts/lib/Array'
import { Card, SectionHeading } from '~/lib/components'
import { Heading } from '~/lib/typography'
import { projects } from './model'
import classes from './style.module.css'
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
          className={classes.img}
        />
        <Heading level="h3" className="text-center m-4">
          {title}
        </Heading>
      </div>
      <div className={classes.footer}>
        <a
          href={github}
          className={classes.link}
          target="_blank"
        >
          <Heading level="h4" className="mr-2">
            GitHub
          </Heading>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
          />
        </a>
        <a
          href={website}
          className={classes.link}
          target="_blank"
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
    <SectionHeading
      variant="simple"
      className="mt-12"
      id="projects"
    >
      <Heading level="h3">Projects</Heading>
    </SectionHeading>
    <ul role="list" className={classes.list}>
      {map(toProject)(projects)}
    </ul>
  </>
)
