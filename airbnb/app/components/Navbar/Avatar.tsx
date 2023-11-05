"use client"
import Image from "next/image";
import images from './images.jpeg'
export default function Avatar() {
  return (
    <Image className=" rounded-full hidden md:block" alt="Dp" src={images} width='30' height='30' />
      
   
  )
}
