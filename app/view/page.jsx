import Image from "next/image";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import c1 from "../components/c1.jpg";
export default function View() {
  return (
    <main className="flex px-4 py-4 flex-col">
      <section className="flex items-center gap-2">
        <div className="h-[50px] relative w-[50px] rounded-[50%] bg-gray-100 flex items-center justify-center  mr-1 ">
          <MdChevronLeft size={30} />
        </div>
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

        <div className="flex justify-between mt-3 items-center ">
          <div className="flex flex-col">
            <p>@singlebae's post</p>
            <p className="text-[11px] opacity-70 ">2 min ago</p>
          </div>
          <div className="flex items-center text-red-700">
            <p className=" font-[600] text-[17px]  ">Destroy with Hinder</p>
            <MdChevronRight size={25} />
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
