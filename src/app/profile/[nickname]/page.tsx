"use client"

import { getCookie } from "@/hooks/cookieManager";

export default function Home() {
  async () => {await getCookie("tokenShort").then(result => {
    console.log(result)
  })}

  return (
    <>
       <h1>Nickanem</h1>
    </>
    
  );
}