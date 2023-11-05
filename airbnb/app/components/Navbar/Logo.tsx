'use client'
import Image from "next/image";
import logo from "./logo.webp";
export default function Logo() {
  return (
    <Image alt="logo" className="hidden md:block cursor-pointer" height='100' width='100' src={logo}/>
  )
}
