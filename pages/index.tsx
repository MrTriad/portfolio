
import type { NextPage } from 'next'
import Head from 'next/head'
import TopNavbar from './components/TopNavbar'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Emanuele Brugnara's portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main>
          <TopNavbar />
          <p className='text-black dark:text-white'>asd</p>
        </main>

        <footer>

        </footer>
      </div>
    </>
  )
}

export default Home
