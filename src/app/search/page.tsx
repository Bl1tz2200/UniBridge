"use client"

import { AddFilters } from "./filter_component";
import { changingStyleParameter } from "@/components/sharedObjects";
import { useState } from "react";
import settings_icon from "@/icons/Settings.svg"
import Image from "next/image";

export default function Search() {

  // These will be shown only for mobile Users
  const [filterState, setFilterState] = useState<changingStyleParameter>({switch: true, param: {"moveToView": "hidden", "buttonActive": ""}})

  function openFilters(){ // Change state between opened filters or closed
        if (filterState.switch){
            setFilterState({switch: !filterState.switch, param:{"moveToView": "hidden", "buttonActive": ""}})
        } else {
            setFilterState({switch: !filterState.switch, param:{"moveToView": "", "buttonActive": "bg-(--accent)"}})
         }
    }

  return (
    <>
      <div>
        <div className={`${filterState.param.buttonActive} md:hidden fixed w-10 z-8 rounded-full m-2.5 p-1 transition-colors duration-300 ease-in-out cursor-pointer`} onClick={openFilters}>
          <Image src={settings_icon} alt="Filter" placeholder="blur" blurDataURL={"@/icons/Settings.svg"}/>
        </div>
        <section className={`${filterState.param.moveToView} md:block grid grid-cols-1 items-start justify-center content-start justify-items-center h-full fixed p-5 pb-20  border-r-1 shadow-2xl w-full sm:w-75 overflow-y-scroll`}>
          <span className="text-2xl text-center">Search Tools:</span>
          <ul className="grid grid-cols-1 gap-5 mt-2.5">
            <AddFilters />
          </ul>
        </section>
        <section>

        </section>
      </div>
    </>
    
  );
}
