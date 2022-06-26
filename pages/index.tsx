import { Header, Tracks } from 'components/main'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Tracks />
      </main>
    </div>
  )
}

export default Home
