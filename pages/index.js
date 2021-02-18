import Head from 'next/head'
import Footer from '../components/MyFooter'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <div className="w-full relative">
          <Landing/>
      </div>

      <div className="w-full relative">
        <Profile/>
      </div>
      

        <div>Never Give up</div>
      
    </div>
  )
}
