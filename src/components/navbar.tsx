"use client"

import { useState }  from "react";
import { changingStyleParameter } from "@/components/sharedObjects";


export function NavBar() { // Returning navbar

  // These will be shown only for mobile Users
  const [dropdownMenu, setDropdownMenu] = useState<changingStyleParameter>({switch: true, param: {"moveToView": ""}})
  const [burgerState, setBurgerState] = useState<changingStyleParameter>({switch: true, param: {"topLine": "bg-black", "middleLine": "", "bottomLine": "bg-black"}})


  function openNavMenu(){ // Change state between opened navmenu or closed
        if (burgerState.switch && dropdownMenu.switch){
            setDropdownMenu({switch: !dropdownMenu.switch, param:{"moveToView": "translate-y-35"}})
            setBurgerState({switch: !burgerState.switch, param:{"topLine": "bg-(--accent) rotate-45 translate-y-1", "middleLine": "hidden", "bottomLine": "bg-[#85c05d] rotate-135 -translate-y-1"}})
        } else {
            setDropdownMenu({switch: !dropdownMenu.switch, param:{"moveToView": ""}})
            setBurgerState({switch: !burgerState.switch, param:{"topLine": "bg-black", "middleLine": "", "bottomLine": "bg-black"}})
         }
    }

  return (
    <nav className="sticky mt-0 top-0 w-[100%] z-10">
      <header className="relative flex  p-3 md:p-5 pt-5 justify-between items-center shadow-xl z-10 bg-white">
        <section className="hidden sm:flex text-sm md:text-xl gap-5 justify-start">
          <div><a href="/search" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">Search</a></div>
          <div><a href="/guidelines" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">Guidelines</a></div>
          <div><a href="/community" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">Community</a></div>
        </section>
        <section className="w-3/12 text-2xl md:text-3xl mt-1 mb-1 text-center ">
          <div><a href="/" className="font-(family-name:--font-rubik) hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">UniBridge</a></div>
        </section>
        <section className="hidden sm:flex w-3/12 text-sm md:text-xl gap-5 justify-end">
          <div><a href="/mentor" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">AI-Mentor</a></div>
          <div><a href="/profile" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">Profile</a></div>
        </section>
        <section className="sm:hidden p-2 w-10">
            <div className="group grid grid-cols-1 gap-1 items-center cursor-pointer" onClick={openNavMenu}>
              <span className={`${burgerState.param.topLine} w-10/12 h-1 duration-500 transition-transform rounded-full`}></span>
              <span className={`${burgerState.param.middleLine} w-10/12 bg-black h-1 duration-500 transition-transform rounded-full`}></span>
              <span className={`${burgerState.param.bottomLine} w-10/12 h-1 duration-500 transition-transform rounded-full`}></span>
            </div>
        </section>
      </header>
      <ul className={`${dropdownMenu.param.moveToView} w-[100%] -mt-35 sm:hidden z-9 grid columns-1 border-b-1 shadow-xl shadow-black/20 transition-transform duration-500 bg-white`}>
            <li className="text-center text-l p-0.5"><a href="/search" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">Search</a></li>
            <li className="text-center text-l p-0.5"><a href="/guidelines" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">Guidelines</a></li>
            <li className="text-center text-l p-0.5"><a href="/community" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">Community</a></li>
            <li className="text-center text-l p-0.5"><a href="/mentor" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">AI-Mentor</a></li>
            <li className="text-center text-l p-0.5"><a href="/profile" className="hover:text-(--accent) focus:text-(--accent) transition-colors duration-200">Profile</a></li>
      </ul>
    </nav>
  );
}