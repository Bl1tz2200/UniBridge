"use client"

import { AddFilters } from "./components/filter_component";
import { changingStyleParameter } from "@/components/sharedObjects";
import { useState } from "react";
import settings_icon from "@/icons/Settings.svg"
import Image from "next/image";
import { CreateCard } from "./components/universityCard_component";
import { filtersList, universityCardInfo } from "./searchObjects";


export default function Search() {
  var filterList: filtersList = { // Getting them from the DB
    "country": ["Russia", "USA"],
    "specialization": ["ICT", "medicine"],
    "language": ["Russian", "English"],
    "price": ["10000$", "20000$"],
    "program": ["bachelor course", "magistracy"],
  }

  var universityList: universityCardInfo[] = [ // Getting them from the DB
    {
      image_name: "moscowgovermentuniversity.jpg", 
      keyName: "moscowgovermentuniversity", 
      label: "Moscow Goverment University", 
      worldRating: Number("157"),
      acceptanceRating: Number("50"),
      tuitionFee: "$27,024",
      dates: {
        main: {
          dateStart: "29.04", 
          dateEnd: "01.08"
        }
      }
    },
  ]

  // These will be shown only for small widths
  const [filterState, setFilterState] = useState<changingStyleParameter>({switch: true, param: {"filters": "hidden", "button": "", "smCardsWrap": ""}})

  function openFilters(){ // Change state between opened or closed filters
        if (filterState.switch){
            setFilterState({switch: !filterState.switch, param:{"filters": "", "button": "bg-(--accent)", "smCardsWrap": "sm:pr-80"}})
        } else {
            setFilterState({switch: !filterState.switch, param:{"filters": "hidden", "button": "", "smCardsWrap": ""}})
         }
    }

  return (
    <>
        <div className={`${filterState.param.button} top-20 right-4 md:hidden fixed w-10 rounded-full p-1 transition-colors duration-300 ease-in-out cursor-pointer z-9`} onClick={openFilters}>
          <Image src={settings_icon} alt="Filter" placeholder="blur" blurDataURL={"@/icons/Settings.svg"}/>
        </div>
        <section className={`${filterState.param.filters} pt-25 p-5 right-0 md:block grid grid-cols-1 items-start justify-center content-start justify-items-center h-full fixed border-r-1 shadow-2xl w-full sm:w-75 overflow-y-scroll bg-white z-8`}>
          <span className="text-2xl text-center">Search Tools:</span>
          <ul className="grid grid-cols-1 gap-5 mt-2.5 w-11/12 sm:w-auto">
            {
              Object.entries(filterList).map(([filterTypeName, categories]: [string, string[]]) => {
                return (
                <AddFilters filterTypeName={filterTypeName} values={categories} key={filterTypeName}/>
              )
              })
            }
          </ul>
        </section>
        <section className={`${filterState.param.smCardsWrap} md:pr-80 pt-25 p-5 absolute w-full`}>
            <ul className="w-full flex flex-wrap justify-center gap-5">
              {
                universityList.map(universityInfo => {
                  return (
                    <CreateCard 
                    key={universityInfo.keyName}
                    image_name={universityInfo.image_name} 
                    keyName={universityInfo.keyName}
                    label={universityInfo.label}
                    worldRating={universityInfo.worldRating}
                    acceptanceRating={universityInfo.acceptanceRating}
                    tuitionFee={universityInfo.tuitionFee}
                    dates={universityInfo.dates}
                    />
                  )
                })
              }
            </ul>
        </section>
     </>
    
  );
}
