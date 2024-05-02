import Image from 'next/image'
import React from 'react'
import c1 from '../components/c1.jpg'
import { MdChevronRight } from "react-icons/md";
function Single({poster,hates,desc,img}) {
  return (
    <div className=" w-[300px] sm:w-[350px]  h-auto ">
      <div>
        <div className=" relative overflow-hidden h-[150px] rounded-[15px] ">
          {/* <Image
            src={
              "https://images.unsplash.com/photo-1541089404510-5c9a779841fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Logo"
            className=" h-full z-20 w-full absolute object-cover  "
            layout="fixed"
          /> */}
          <img
            className=" h-full z-20 w-full absolute scale-[1.2] object-cover  "
            src={img}
            alt=""
          />
          <div className="bg-white font-[500] text-black absolute bottom-3 right-3 h-auto py-1 text-[13px] w-auto px-3 rounded-[15px] z-40">
            <p>{hates} hates</p>
          </div>
        </div>
      </div>
      <div>
        {/* Info */}
        <div className="flex py-4 flex-col gap-2">
          <section className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={c1}
                alt="Logo"
                className="rounded-[50%] h-[40px] w-[40px] object-cover  "
                layout="fixed"
              />
              <p className="font-[700]">@{poster}</p>
            </div>
            <div className="flex items-center text-red-700">
              <p className=" font-[600] text-[17px]  ">View post</p>
              <MdChevronRight size={25} />
            </div>
          </section>
        </div>
        <div>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Single
// Have you guys seen this annoying couple? always post...