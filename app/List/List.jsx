// 'use client'
import Single from './Single'
import Link from 'next/link';
// import data from '../components/data'
// import { useState } from 'react';
function List() {
    // const [lists,setLists] = useState(data)
    // console.log(lists);
  return (
    <div className='flex flex-col min-h-screen  w-full px-4 my-6 pb-20  items-center justify-center gap-12 ' >
      {[1,2,3].map(()=>{
        return (
          <Link href={'/view'} >
            <Single />
          </Link>
        );
      })}
    </div>
  )
}

export default List
