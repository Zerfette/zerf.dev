import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Heading } from '~/lib/typography'

export const Social = () => (
  <span className="isolate inline-flex rounded-md shadow-sm">
    <a target="_blank" href="https://github.com/Zerfette">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <Heading level="h3" className="mr-2">GitHub</Heading>
        <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size='lg'
          />
      </button>
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/zerf/">
      <button
        type="button"
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <Heading level="h3" className="mr-2">LinkedIn</Heading>
        <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size='lg'
          />
      </button>
    </a>
    <a target="_blank" href="https://g.dev/zerf">
      <button
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        <Heading level="h3" className="mr-2">Google</Heading>
        <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size='lg'
          />
      </button>
    </a>
  </span>
)
