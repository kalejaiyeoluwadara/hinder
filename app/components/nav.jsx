import Image from "next/image";
import c1 from "./c1.jpg";
import { BsBell } from "react-icons/bs";
function Nav() {
  return (
    <nav className=" w-screen px-4 flex justify-between items-center h-[90px] ">
      <div className="flex items-center gap-1" >
        <Image
          src={c1}
          alt="Logo"
         
          className="rounded-[50%] h-[40px] w-[40px] object-cover  "
          layout="fixed"
        />
        <p className="ml-2 font-[600] text-[14px] ">Welcome back, single quin</p>
      </div>
      <div className="h-[40px] relative w-[40px] rounded-[50%] bg-gray-100 flex items-center justify-center " >
        <BsBell size={20} />
        <div className="h-[6px] w-[6px] bg-black rounded-[50%] absolute right-1 top-0 "></div>
      </div>
    </nav>
  );
}

export default Nav;
