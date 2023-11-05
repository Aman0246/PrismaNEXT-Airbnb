"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const currentUser=true
  const toggleOpen=useCallback(()=>{
    setIsOpen((e)=>!e)
  },[])
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="
          hidden
          md:block
          text-sm 
          font-semibold 
          py-3 
          px-4 
          rounded-full 
          hover:bg-red-50
          transition 
          cursor-pointer
        "
        >
          Airbnb your home
        </div>
        <div
            onClick={toggleOpen}
          className="
        p-4
        md:py-1
        md:px-2
        border-[1px] 
        border-neutral-200 
        flex 
        items-center 
         justify-between
        gap-1
        rounded-full 
        cursor-pointer 
        hover:shadow-md 
        transition
        "
        >
          <AiOutlineMenu/>
          <Avatar/>
          <div className="hidden md:block">
            {/* <Avatar src={currentUser?.image} /> */}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
          absolute 
          rounded-xl 
          shadow-md
          w-[40vw]
          md:w-3/4 
          bg-white 
          overflow-hidden 
          right-0 
          top-12 
          text-sm
        "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                   <div 
    
    className="
      px-4 
      py-3 
      hover:bg-red-50 
      transition
      font-semibold
    "
  >
   My trip
  </div>
                  <div 
    
    className="
      px-4 
      py-3 
      hover:bg-red-50
      transition
      font-semibold
    "
  >
   My favorities
  </div>
                 <div 
    
    className="
      px-4 
      py-3 
      hover:bg-red-50
      transition
      font-semibold
    "
  >
   My reservation
  </div>
                   <div 
    
    className="
      px-4 
      py-3 
      hover:bg-red-50
      transition
      font-semibold
    "
  >
   My Properties
  </div>
                    <div 
    
    className="
      px-4 
      py-3 
      hover:bg-red-50
      transition
      font-semibold
    "
  >
   Airbnb your home
  </div>
                <hr />
                <div 
    
      className="
        px-4 
        py-3 
        hover:bg-red-50
        transition
        font-semibold
        text-red-300
      "
    >
     Logout
    </div>
              </>
            ) : (
              <>
                <div
                  className="
                                px-4 
                                py-3 
                                hover:bg-red-50
                                transition
                                font-semibold
                            "
                >
                  Login
                </div>



                <div
                  className="
                                px-4 
                                py-3 
                                hover:bg-red-50
                                transition
                                font-semibold
                            "
                >
                  Sign up
                </div>
             
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
