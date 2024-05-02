import Link from 'next/link'
import Nav from './components/nav'
import Upload from './components/Upload'
import List from './List/List'

export default function Home() {
  return (
    <main className='min-h-screen relative flex flex-col  w-screen' >
      <Nav/>
      <Upload/>
      <List/>
      </main>
  )
}