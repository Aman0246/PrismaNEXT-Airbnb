"use client";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
interface IPROPS {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
let RegisterModel: React.FC<IPROPS> = ({ showModal, setShowModal }) => {
  return (
    showModal && (
      <>
        <div
          className="
        justify-center 
        items-center 
        flex 
        overflow-x-hidden 
        overflow-y-auto 
        fixed 
        inset-0
        z-50 
        outline-none 
        focus:outline-none
        bg-neutral-800/70
      "
        >
          <div
            className="
        relative 
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        my-6
        mx-auto 
        h-full 
        lg:h-auto
        md:h-auto
        "
          >
            {/*content*/}
            <div
              className={`
          translate
          duration-300
          h-full
     
        `}
            >
              <div
                className="
            translate
            h-full
            lg:h-auto
            md:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-white 
            outline-none 
            focus:outline-none
          "
              >
                {/*header*/}
                <div
                  className="
              flex 
              items-center 
              p-6
              rounded-t
              justify-center
              relative
              border-b-[1px]
              "
                >
                  <button
                    className="
                  p-1
                  border-0 
                  hover:opacity-70
                  transition
                  absolute
                  left-9
                "
                    //
                  >
                    <IoMdClose onClick={() => setShowModal(false)} size={18} />
                  </button>
                  <div className="text-lg font-semibold">title</div>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">body</div>
                {/*footer*/}
                <div className="flex flex-col gap-2 p-6">
                  <div
                    className="
                  flex 
                  flex-row 
                  items-center 
                   justify-center
                  gap-4 
                  w-full
                "
                  > 
                  <div  className="w-full">

                    <Button data={"Button"} />
                  </div>
                  <div  className="w-full">

                    <Button data={"Login"} />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default RegisterModel;
