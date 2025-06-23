"use client"

import Image from "next/image";
import { universityCardInfo } from "../searchObjects";

export function CreateCard({image_name, keyName, label, starSum, startCounter, acceptanceRating, tuitionFee, dateStart, dateEnd}: universityCardInfo) { // Component to make cards of university
    return (
      <>
        <li className="grid grid-cols-1 shadow-xl rounded-xl max-w-70">
          <Image src={`/images/search/${image_name}`} width={1920} height={1080} className="w-full h-40 rounded-tr-xl rounded-tl-xl" placeholder="blur" blurDataURL={`/images/search/${image_name}`} alt="University Image" />
          <div className="grid grid-cols-1 justify-center justify-items-center w-full">
          <label className="p-2.5 text-center">{label}</label>
          <ul className="grid grid-cols-2 items-center content-center justify-items-center justify-center px-1 pb-2.5 gap-2">
              <li className="flex gap-1.5 text-xl">
              <svg className="text-amber-300 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-rating="10"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
              <span className="text-center">{(starSum/startCounter).toFixed(2)}</span>
              </li>
              <li className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
              <span className="text-sm text-center">Acceptance Rating:</span>
              <span>{acceptanceRating}%</span>
              </li>
              <li className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
              <span className="text-sm text-center">Tuition Fee:</span>
              <span className="text-xs">(middle)</span>
              <span>{tuitionFee}</span>
              </li>
              <li className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
              <span className="text-sm text-center">Application dates:</span>
              <span className="text-center">{dateStart} — {dateEnd}</span>
              </li>
          </ul>
          </div>
          <a href={`/search/${keyName}`} className="w-full bg-(--accent) px-1.5 py-0.5 text-xl md:text-2xl text-black hover:text-white focus:text-white transition-colors duration-500 ease-out text-center rounded-bl-xl rounded-br-xl">More about it</a>
        </li>
      </>
    );
}