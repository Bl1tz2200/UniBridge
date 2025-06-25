"use client"

import { capitalizeFirstLetter } from "@/hooks/textUtils";
import { changingStyleParameter } from "@/components/sharedObjects";
import { useState, useTransition } from "react";
import { filterParams } from "../searchObjects";

export function AddFilters({filterTypeName, values}: filterParams) { // Component to add filters by values
  
  const [filterValues, setFilterValues] = useState<string[]>(values)
  const [categoryOpened, setCategoryOpened] = useState<changingStyleParameter>({switch: true, param:{"categoryList": "hidden", "leftArrowPart": "", "rightArrowPart": ""}})
  const [isPending, startTransition] = useTransition();


  function openCategoryList(){ // Change state between opened navmenu or closed
      if (categoryOpened.switch){
          setCategoryOpened({switch: !categoryOpened.switch, param:{"categoryList": "", "leftArrowPart": "rotate-45 translate-x-0.5", "rightArrowPart": "-rotate-45 -translate-x-0.5"}})
      } else {
          setCategoryOpened({switch: !categoryOpened.switch, param:{"categoryList": "hidden", "leftArrowPart": "", "rightArrowPart": ""}})
        }
  }

  return (
    <>
        <li className="grid grid-cols-1 items-center justify-center content-center justify-items-start">
          <label className="flex flex-nowrap ml-1">
                <div className="flex flex-nowrap items-center mr-2.5 cursor-pointer" onClick={openCategoryList}>
                  <span className={`${categoryOpened.param.leftArrowPart} w-3 h-0.5 bg-gray-600/50 transition-transform duration-300`}></span>
                  <span className={`${categoryOpened.param.rightArrowPart} w-3 h-0.5 bg-gray-600/50 transition-transform duration-300`}></span>
                </div>
                <span className="text-xl">{capitalizeFirstLetter(filterTypeName)}</span>
              </label>
              <input type="text" className={`${categoryOpened.param.categoryList} my-2.5 p-1 border-(--accent) border-1 rounded-xl w-full`} placeholder={`Search by ${filterTypeName}`} onChange={input => {
                startTransition(() => {
                  if(input.target.value){
                    setFilterValues(values.filter(value => {
                      return value.toLowerCase().includes(input.target.value.trim().toLowerCase())
                    }))
                  } else {
                    setFilterValues(values)
                  }
                })
              }}/>
              <ul className={`${categoryOpened.param.categoryList} flex flex-wrap gap-2.5 sm:gap-1 sm:grid sm:grid-cols-1 items-center content-center ml-1`}>
                {isPending ? <li>Loading...</li> :
                  filterValues.map((value: string) => ( // Creating list of checkboxes for each filter value
                      (<li key={value.toLowerCase()} className={`${categoryOpened.param.categoryList}`}>
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
