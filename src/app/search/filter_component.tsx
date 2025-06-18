"use client"

import { capitalizeFirstLetter } from "@/hooks/textUtils";

type filterType = {[key: string]: string[]}

export function AddFilters() { // Component to add filters by values
        var filterParams: filterType = { // Getting them from the DB
            "country": ["Russia", "USA"],
            "specialization": ["ICT", "medicine"],
            "language": ["Russian", "English"],
            "price": ["10000$", "20000R"],
            "program": ["bachelor course", "magistracy"],
        }
  
    return (
    <>

        {
            Object.keys(filterParams).map((filterTypeName: string) => {
              return (
                <li key={filterTypeName} className="grid grid-cols-1 items-center justify-center content-center justify-items-start">
                   <span className="text-xl">{capitalizeFirstLetter(filterTypeName)}:</span>
                  <input type="text" className="my-2.5 p-1 border-(--accent) border-1 rounded-xl w-full" placeholder={`Search by ${filterTypeName}`}/>
                  <ul className="flex flex-wrap gap-2.5 sm:gap-1 sm:grid sm:grid-cols-1 items-center content-center">
                    {
                      filterParams[filterTypeName].map((value: string) => ( // Creating list of checkboxes for each filter category
                          <li key={value.toLowerCase()}>
                              <input type="checkbox" placeholder={`Chosen ${filterTypeName}`}/>
                              <span className="ml-2.5">{capitalizeFirstLetter(value)}</span>
                          </li>
                      ))
                    }
                  </ul>
                </li>
              )
            })
        }
        
    </>
    
  );
}
