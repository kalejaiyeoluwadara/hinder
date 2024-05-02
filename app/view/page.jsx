import Image from "next/image";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import c1 from "../components/c1.jpg";
import Link from "next/link";
export default function View() {
  return (
    <main className="flex px-4 relative h-auto py-4 pb-20 w-screen flex-col">
      <section className="flex  top-0 w-screen z-50 bg-white h-[60px] items-center gap-2">
        <Link href={'/'} >
          <div className="h-[50px] relative w-[50px] rounded-[50%] bg-gray-100 flex items-center justify-center  mr-1 ">
            <MdChevronLeft size={30} />
          </div>
        </Link>
        <p className="font-[500] text-[18px]">Annoying Couple</p>
      </section>

      <section className="flex flex-col mt-4">
        <div className=" relative overflow-hidden h-[300px] rounded-[15px] ">
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

        <div className="flex justify-between mt-4 items-start ">
          <div className="flex flex-col">
            <p className="font-[600]">@singlebae's post</p>
            <p className="text-[13px] opacity-70 ">2 min ago</p>
          </div>
          <div className="flex items-center text-red-700">
            <p className=" font-[600] text-[15px]  ">Destroy with Hinder</p>
            <MdChevronRight size={25} />
          </div>
        </div>
      </section>
      {/* Description */}
      <section className="my-4">
        <p className="text-[16px] font-[500] ">
          Have you guys seen this annoying couple? always posting their nonsense
          self online, we can sha destroy their relationship on hinder.
        </p>
      </section>
      {/* Comments */}
      <section className="w-full flex flex-col">
        <div className="flex items-center mb-2 justify-between w-full">
          <p className="opacity-80 text-[16px] ">Comments</p>
          <button className="px-4 py-2 bg-red-100 text-[16px] font-[600] text-red-900 rounded-[20px] ">
            + Add comment
          </button>
        </div>
        {/* comment items */}
        <div>
          <div className="flex items-center mt-2 justify-between">
            <div className="flex items-center gap-1">
              <Image
                src={c1}
                alt="Logo"
                className="rounded-[50%] h-[40px] w-[40px] object-cover  "
                layout="fixed"
              />
              <p className="ml-2 opacity-60 font-[500] text-[14px] ">
                @single2
              </p>
            </div>
            <button
              className="px-4 py-2 bg-gray-100 text-[16px] font-[600]
            rounded-[20px] "
            >
              Reply
            </button>
          </div>
          <p className="font-[500] mt-2 text-[16px] ">
            ikr! very exhausting couple. I'm in oo
          </p>
        </div>
      </section>

      <section className="flex w-full mt-8  items-center justify-center ">
        <button className="bg-red-800 text-white font-[500] text-opacity-90 text-[20px] py-3 w-full flex items-center border-none justify-center rounded-[30px] ">
          Hate on their relationship
        </button>
      </section>
    </main>
  );
}
