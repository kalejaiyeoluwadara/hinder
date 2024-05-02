
import { TbHomeEco } from "react-icons/tb";
import { MdNotifications } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="fixed bg-white z-40  text-black shadow-xl h-[60px]  bottom-0 w-screen flex items-center justify-center gap-6 px-8 ">
      <Link href={"/"}>
        <RiHome5Fill size={30} />
      </Link>
      <Link href={"/notifications"}>
        <IoIosNotificationsOutline size={30} />
      </Link>
    </div>
  );
}