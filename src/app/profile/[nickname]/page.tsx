"use client"

import { PopUp } from "@/components/popup";
import { IP_BACKEND } from "@/components/sharedObjects";
import { getUserData } from "@/hooks/accountActions";
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
      <section className="mt-30 grid grid-cols-1 items-center content-center justify-center justify-items-center">
        <div className="w-75 h-75 overflow-hidden rounded-full border-1 border-black flex items-center justify-center">
          <Image src={`${IP_BACKEND}/images/users/default/userDefault.webp`} alt="UserImage" width={500} height={500} priority/>
        </div>
         <span className="mt-5 text-2xl">
          {isPending ? "Loading..." : userData?.username}
        </span>
        <span className="text-m text-gray-500">
          {isPending ? "Loading..." : userData?.email}
        </span>
      </section>
    </>
    
  );
}