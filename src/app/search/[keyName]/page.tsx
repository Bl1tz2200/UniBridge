"use client"

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { universityInfo } from '../searchObjects'

var universityList: universityInfo = { // Getting them from the DB
    image_name: "moscowgovermentuniversity.jpg", 
    keyName: "moscowgovermentuniversity", 
    label: "Moscow Goverment University", 
    starSum: Number("16"), 
    startCounter: Number("4"), 
    acceptanceRating: Number("50"),
    tuitionFee: "$27,024", 
    dateStart: "29.04", 
    dateEnd: "01.08"
  }
 
export default function Page() {
  const params = useParams()
  const db_key = params.keyName

  return (
    <>
      <Image src={`/images/search/${universityList.image_name}`} width={1920} height={1080} className="w-full h-40 rounded-tr-xl rounded-tl-xl" placeholder="blur" blurDataURL={`/images/search/${universityList.image_name}`} alt="University Image" />
      <div className="grid grid-cols-1 justify-center justify-items-center w-full">
      <label className="p-2.5">{universityList.label}</label>
      <ul className="grid grid-cols-2 items-center content-betweem justify-items-center justify-between px-1 pb-2.5 gap-2">
          <li className="flex gap-1.5 text-xl">
          <svg className="text-amber-300 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-rating="10"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
          <span>{(universityList.starSum/universityList.startCounter).toFixed(2)}</span>
          </li>
          <li className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
          <span className="text-sm">Acceptance Rating:</span>
          <span>{universityList.acceptanceRating}%</span>
          </li>
          <li className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
          <span className="text-sm">Tuition Fee:</span>
          <span className="text-xs">(middle)</span>
          <span>{universityList.tuitionFee}</span>
          </li>
          <li className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
          <span className="text-sm">Application dates:</span>
          <span>{universityList.dateStart} — {universityList.dateEnd}</span>
          </li>
      </ul>
      </div>
    </>
  )
}