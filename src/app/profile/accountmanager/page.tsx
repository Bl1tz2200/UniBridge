"use client"

import { useEffect, startTransition, useState } from "react";
import { setCookie } from "./cookieManager";
import { changingStyleParameter } from "@/components/sharedObjects";


export default function AccountManage() {
  useEffect(() => {
    startTransition(async () => {
      await setCookie("token", "1")
    })
  }, [])


  const [fillingBox, setFillingBox] = useState<changingStyleParameter>({switch: true, param: {"loginBox": "", "registrationBox": "hidden"}})

  function changeFillingBox(){ // Change state between opened or closed filters
      if (fillingBox.switch){
          setFillingBox({switch: !fillingBox.switch, param:{"loginBox": "hidden", "registrationBox": ""}})
      } else {
          setFillingBox({switch: !fillingBox.switch, param:{"loginBox": "", "registrationBox": "hidden"}})
        }
  }
  
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-repeat bg-cover bg-center bg-[url(../../public/images/profile/acoountManager/background.png)] bg-blend-darken bg-black/50">
      <section className={`${fillingBox.param.loginBox} fixed grid grid-cols-1 items-center justify-items-center border-(--accent) border-1 bg-white sm:hover:scale-110 rounded-xl p-5 transition-transform duration-500 ease-out`}>
        <h1 className="text-(--accent) text-4xl">Login</h1>
        <button type="button" className='text-m sm:text-l text-center mt-2.5 hover:text-(--accent) transition-colors duration-300 underline' onClick={changeFillingBox}>Don't have account?</button>
        <form method="post" action="https://127.0.0.1:8080/login" className="grid grid-cols-1 items-center justify-start content-center justify-items-start sm:w-100">
          <label className="pt-4 text-sm">Username</label>
          <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" type="text" placeholder="Username..." name="username" required/>
          <label className="pt-4 text-sm">Password</label>
          <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" type="text" placeholder="Password..." name="password" required/>
          <button className="bg-[#85c05d] justify-self-center px-1.75 py-0.5 mt-5 text-xl md:text-2xl text-black hover:text-white focus:text-white transition-colors duration-200 ease-out text-center rounded-3xl cursor-pointer" type="submit">Submit</button>
        </form>
        <a className='text-m sm:text-l text-center mt-4 hover:text-(--accent) transition-colors duration-300 underline' href={`/forgot-password`}>Forgot password?</a>
      </section>
      <section className={`${fillingBox.param.registrationBox} fixed transform-3d  grid grid-cols-1 items-center justify-items-center border-(--accent) border-1 bg-white sm:hover:scale-110 rounded-xl p-5 transition-transform duration-500 ease-out`}>
        <h1 className="text-(--accent) text-4xl">Registration</h1>
        <button type="button" className='text-m sm:text-l text-center mt-2.5 hover:text-(--accent) transition-colors duration-300 underline' onClick={changeFillingBox}>Already have account?</button>
        <form method="post" action="https://127.0.0.1:8080/registration" className="grid grid-cols-1 items-center justify-start content-center justify-items-start sm:w-100">
          <label className="pt-4 text-sm">Username</label>
          <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" type="text" placeholder="Username..." name="username" required/>
          <label className="pt-4 text-sm">Email</label>
          <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" type="text" placeholder="Email..." name="email" required/>
          <label className="pt-4 text-sm">Password</label>
          <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" type="text" placeholder="Password..." name="password" required/>
          <label className="pt-4 text-sm">Repeat password</label>
          <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" type="text" placeholder="Password again..." name="repeatpassword" required/>
          <button className="bg-[#85c05d] justify-self-center px-1.75 py-0.5 mt-5 text-xl md:text-2xl text-black hover:text-white focus:text-white transition-colors duration-200 ease-out text-center rounded-3xl cursor-pointer" type="submit">Submit</button>
        </form>
      </section>
    </div>
    </>
    
  );
}
