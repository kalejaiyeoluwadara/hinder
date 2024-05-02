import { IoMdAdd } from "react-icons/io";
function Upload() {
  return (
    <div className="w-screen mt-2 px-4 ">
      <div className="rounded-[30px] flex items-center justify-start px-2 w-full h-[60px] border-[2px] border-gray-200 " >
        <IoMdAdd className="opacity-[0.6]" size={20} />
       <p className="text-opacity-0.6 text-[15px] ml-2 " >Which couple is annoying you today? </p>
      </div>
    </div>
  );
}

export default Upload;
