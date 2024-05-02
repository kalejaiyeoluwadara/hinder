import React from 'react'
import Single from './Single'

function List() {
  return (
    <div className='flex flex-col h-auto w-full px-4 my-6 mb-20 items-center justify-center gap-12 ' >
      {[1,2,3,4,5].map(()=>{
        return <Single />;
      })}
    </div>
  )
}

export default List
