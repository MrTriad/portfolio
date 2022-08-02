
import type { NextPage } from 'next'
import Head from 'next/head'
import { FaArrowDown } from 'react-icons/fa'
import TopNavbar from './components/TopNavbar'

const Home: NextPage = () => {
  return (
    <>
      <div className='dark:bg-gray-600 bg-gray-100  h-screen' >
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Emanuele Brugnara's portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopNavbar />
        <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory">

          <section className='w-full h-screen flex flex-wrap pt-16 snap-start'>
            <div className='w-2/3 m-auto'>
              <p className='m-8 font-bold font-mono text-8xl center'>
              Welcome to<br></br>
              my cave
              </p>
              <p className='m-8 font-bold font-mono text-xl center'>
              Brugnara Emanuele Edoardo
              aka triad
              </p>
            </div>
            <div className='w-1/3 bg-slate-600'></div>
            <div className="animate-bounce w-6 h-6">
            <FaArrowDown />
            </div>
            
              
            
          </section>
          <section id='Bio' className='w-full h-screen flex flex-wrap bg-green-200 snap-start'>
            BIO
          </section>
          
        </main>

        <footer>

        </footer>
      </div>
    </>
  )
}

export default Home
