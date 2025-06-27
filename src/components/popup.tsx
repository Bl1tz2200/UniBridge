"use client"

import { Dispatch, SetStateAction, useRef } from "react";

export function PopUp({popup, setPopup}: { // Taking popup and setState of useState hook from page
  popup: { // Geting popup prop
    message: string;
    isShown: boolean;
    preventReload: boolean;
  }, 
  setPopup: Dispatch<SetStateAction<{ // Getting setter function
      message: string;
      isShown: boolean;
      preventReload: boolean;
  }>>}) {

  return (
    <>
      <div className={`${popup.isShown ? "" : "hidden"} w-screen h-screen fixed z-9 grid grid-cols-1 items-center justify-center justify-items-center content-center`}>
        <form onSubmit={e => {if(popup.preventReload){e.preventDefault()}}} className="p-10 bg-white z-9 shadow-3xl rounded-2xl grid grid-cols-1">
          <span className="text-3xl">{popup.message}</span>
          <button type="submit" className="bg-[#85c05d] px-1.75 py-0.5 m-4 text-xl md:text-3xl text-black hover:text-white focus:text-white transition-colors duration-500 ease-out text-center rounded-3xl cursor-pointer" onClick={() => {setPopup({...popup, isShown: false})}}>Close</button>
        </form>
        <div className="w-screen h-screen fixed z-8 backdrop-blur-xl"/>
      </div> 
    </>
    
  );
  
}