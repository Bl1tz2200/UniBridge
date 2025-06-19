"use client"

import { capitalizeFirstLetter } from "@/hooks/textUtils";
import { changingStyleParameter } from "@/components/sharedObjects";
import { useState } from "react";

type filterParams = {
    filterTypeName: string,
    values: string[]
}

export function AddFilters({filterTypeName, values}: filterParams) { // Component to add filters by values

    const [categoryOpened, setCategoryOpened] = useState<changingStyleParameter>({switch: true, param:{"categoryListShown": "hidden", "leftArrow": "", "rightArrow": ""}})

    function openCategoryList(){ // Change state between opened navmenu or closed
        if (categoryOpened.switch){
            setCategoryOpened({switch: !categoryOpened.switch, param:{"categoryListShown": "hidden", "leftArrow": "", "rightArrow": ""}})
        } else {
            setCategoryOpened({switch: !categoryOpened.switch, param:{"categoryListShown": "", "leftArrow": "rotate-45 translate-x-0.5", "rightArrow": "-rotate-45 -translate-x-0.5"}})
         }
    }
  
    return (
      <>
          <li className="grid grid-cols-1 items-center justify-center content-center justify-items-start">
            <label className="flex flex-nowrap ml-1">
                 <div className="flex flex-nowrap items-center mr-2.5 cursor-pointer" onClick={openCategoryList}>
                    <span className={`${categoryOpened.param.leftArrow} w-3 h-0.5 bg-gray-600/50 transition-transform duration-300`}></span>
                    <span className={`${categoryOpened.param.rightArrow} w-3 h-0.5 bg-gray-600/50 transition-transform duration-300`}></span>
                 </div>
                 <span className="text-xl">{capitalizeFirstLetter(filterTypeName)}</span>
               </label>
               <input type="text" className={`${categoryOpened.param.categoryListShown} my-2.5 p-1 border-(--accent) border-1 rounded-xl w-full`} placeholder={`Search by ${filterTypeName}`}/>
               <ul className={`${categoryOpened.param.categoryListShown} flex flex-wrap gap-2.5 sm:gap-1 sm:grid sm:grid-cols-1 items-center content-center ml-1`}>
                 {
                   values.map((value: string) => ( // Creating list of checkboxes for each filter category
                        (<li key={value.toLowerCase()} className={`${categoryOpened.param.categoryListShown}`}>
                       <input type="checkbox" placeholder={`Chosen ${filterTypeName}`}/>
                          <span className="ml-2.5">{capitalizeFirstLetter(value)}</span>
                       </li>)
                   ))
                }
               </ul>
            </li>
      </>
    );
}
