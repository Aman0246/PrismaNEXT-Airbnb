'use client'
interface IPROPS{
    data:String
}
let Button:React.FC<IPROPS> = ({data}) => {
  return (
    <div className=" bg-rose-500 text-white w-full p-2 rounded-md text-center cursor-pointer">
      {data}
    </div>
  )
}

export default Button
