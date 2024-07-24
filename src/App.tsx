import { Header } from '~/lib/components'
import { Heading } from '~/lib/typography'
import {
  Articles,
  Projects,
  Social,
  Talks,
} from './lib/sections'

const App = () => {
  return (
    <div className="p-12">
      <Header variant="simple">
        <Heading level="h1">Sarah Renfro</Heading>
        <Heading level="h2" className="my-6 max-w-lg">
          Elevating User Experience with Precision and
          Creativity
        </Heading>
      </Header>
      <Social />
      <Projects />
      <Talks />
      <Articles />
    </div>
  )
}

export default App
