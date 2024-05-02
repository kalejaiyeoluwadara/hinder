import Link from 'next/link'
import Nav from './components/nav'
import Upload from './components/Upload'

export default function Home() {
  return (
    <main className='h-screen relative flex flex-col  w-screen' >
      <Nav/>
      <Upload/>
      <h1>Home</h1>
      </main>
  )
}