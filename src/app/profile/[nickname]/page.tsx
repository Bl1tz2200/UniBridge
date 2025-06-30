"use client"

import { PopUp } from "@/components/popup";
import { IP_BACKEND } from "@/components/sharedObjects";
import { getUserData } from "@/hooks/accountActions";
import backgound from "@/images/profile/user/background.webp"
import Image from "next/image";
import { useLayoutEffect, useState, useTransition } from "react";

export default function Home() {

  const [popup, setPopup] = useState<{message: string, isShown: boolean, preventReload: boolean}>({message: "", isShown: false, preventReload: false}) // Controlling popup function
  const [userData, setUserData] = useState<{username: string, email: string}>()
  const [isPending, startTransition] = useTransition()

  useLayoutEffect(() => {
    startTransition(async () => {
      const {error, message, userdata} = await getUserData()
      if (error) {
        setPopup({message: message, isShown: true, preventReload: false})
      } else {
        setUserData(userdata)
      }

    })
  }, [])

  return (
    <>
      <PopUp popup={popup} setPopup={setPopup} />
      <div className="w-full h-full fixed">
        <Image src={backgound} className="object-cover pointer-events-none" alt="Background" fill sizes="500" />
        <div className="pt-25 sm:pt-5 sm:mt-25 p-5 container sm:rounded-3xl backdrop-blur-2xl z-5 border-white sm:border-2 shadow-2xl justify-self-center">
        <section className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
          <div className="w-60 h-60 sm:w-75 sm:h-75 md:w-100 md:h-100 overflow-hidden rounded-full border-1 border-black flex items-center justify-center relative">
            <Image src={`${IP_BACKEND}/images/users/default/userDefault.webp`} alt="UserImage" sizes="100" fill priority/>
          </div>
          <span className="mt-5 text-2xl">
            {isPending ? "Loading..." : userData?.username}
          </span>
          <span className="text-m text-gray-500">
            {isPending ? "Loading..." : userData?.email}
          </span>
        </section>
      </div>
      </div>
    </>
    
  );
}