'use client'
import Single from './Single'
import Link from 'next/link';
import {data} from '../components/data'
import { useState } from 'react';
function List() {
    const [lists,setLists] = useState(data)
  return (
    <div className='flex flex-col min-h-screen w-screen px-4 my-6 pb-20  items-center justify-center gap-8 ' >
      {lists.map((list,id)=>{
        const {poster,img,hates,comments,desc} = list
        return (
          <Link key={id} href={'/view'} >
            <Single poster={poster} hates={hates} img={img} desc={desc} />
          </Link>
        );
      })}
    </div>
  )
}

export default List
