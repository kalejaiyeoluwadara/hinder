import Image from 'next/image'
import React from 'react'
import c1 from '../components/c1.jpg'
import { MdChevronRight } from "react-icons/md";
function Single() {
  return (
    <div className=" w-full h-[250px] ">
      <div>
        <div className=" relative overflow-hidden h-[150px] rounded-[15px] ">
          <Image
            src={c1}
            alt="Logo"
            className=" h-full z-20 w-full absolute object-cover  "
            layout="fixed"
          />
          <div className="bg-white font-[500] text-black absolute bottom-3 right-3 h-auto py-1 text-[13px] w-auto px-3 rounded-[15px] z-40">
            <p>20 hates</p>
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
              <p className="font-[700]">@singlebae</p>
            </div>
            <div className="flex items-center text-red-700">
              <p className=" font-[600] text-[17px]  ">View post</p>
              <MdChevronRight size={25} />
            </div>
          </section>
        </div>
        <div>
          <p>Have you guys seen this annoying couple? always post...</p>
        </div>
      </div>
    </div>
  );
}

export default Single
