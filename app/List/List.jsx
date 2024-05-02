import React from 'react'
import Single from './Single'
import Link from 'next/link';

function List() {
  return (
    <div className='flex flex-col min-h-screen  w-full px-4 my-6 pb-20  items-center justify-center gap-12 ' >
      {[1,2,3,4,5].map(()=>{
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
