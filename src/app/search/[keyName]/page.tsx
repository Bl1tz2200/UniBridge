"use client"

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { universityPageInfo } from '../searchObjects'

var university: universityPageInfo = { // Getting them from the DB
  image_name: "/images/search/moscowgovermentuniversity.jpg", 
  keyName: "moscowgovermentuniversity", 
  label: "Moscow Goverment University",
  description: "It's great and big university placed in Russia capital Moscow.",
  starSum: Number("16"), 
  startCounter: Number("4"), 
  acceptanceRating: Number("50"),
  tuitionFee: "$27,024", 
  dateStart: "29.04", 
  dateEnd: "01.08",
  scholarship: "full",
  practical: "yes",
  subjects: ["maths", "chemistry"],
  qualifications: ["phd", "master"],
  contacts: {"Telegram": "@test", "Site": "https://myunisite.com"}
}
 
export default function Page() {
  const params = useParams()
  const db_key = params.keyName

  return (
    <>
      <header className="mt-25 flex items-center justify-center">
        <div className={`grid content-center justify-center justify-items-center w-11/12 h-220 bg-center bg-cover bg-blend-darken bg-black/50 rounded-xl relative`}>
          <span className="m-5 text-4xl md:text-7xl text-white border-b-1 border-white pb-5 px-5 text-center font-semibold hover:scale-105 transition-transform duration-500">{university.label}</span>
          <span className="m-3 w-10/12 text-xl md:text-3xl px-5 text-white text-center hover:scale-105 transition-transform duration-500">{university.description}</span>
          <Image src={`${university.image_name}`} className="-z-1 rounded-xl object-cover" alt={`${params.keyName} image`} fill priority/>
        </div>
      </header>
      <section className='pt-20 mt-20 border-t-5 border-(--accent) grid grid-cols-1 justify-center justify-items-center w-11/12 justify-self-center px-5'>
        <span className='text-center text-4xl mb-10'>Specifications:</span>
        <ul className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center content-center justify-items-center pb-2.5 gap-5 md:gap-10">
          <li className="flex gap-1.5 text-2xl sm:text-3xl">
            <svg className="text-amber-300 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-rating="10"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            <span className="text-center">{(university.starSum/university.startCounter).toFixed(2)}</span>
          </li>
          <li className="flex gap-1.5 items-center content-center justify-center justify-items-center text-2xl sm:text-3xl">
            <span className="text-center">Acceptance Rating:</span>
            <span className="text-center">{university.acceptanceRating}%</span>
          </li>
          <li className="flex gap-1.5 items-center content-center justify-center justify-items-center">
            <span className="text-2xl sm:text-3xl text-center">Tuition Fee:</span>
            <span className='text-2xl sm:text-3xl text-center'>{university.tuitionFee}</span>
            <span className="text-m text-center">(middle)</span>
          </li>
          <li className="flex gap-1.5 items-center content-center justify-center justify-items-center text-2xl sm:text-3xl">
            <span className="text-center">Application dates:</span>
            <span className="text-center">{university.dateStart}<br className='md:hidden'/> — <br className='md:hidden'/>{university.dateEnd}</span>
          </li>
          <li className="flex gap-1.5 items-center content-center justify-center justify-items-center text-2xl sm:text-3xl">
            <span className="text-center">Scholarship:</span>
            <span className="text-center">{university.scholarship}</span>
          </li>
          <li className="flex gap-1.5 items-center content-center justify-center justify-items-center text-2xl sm:text-3xl">
            <span className="text-center">Infrastructure for practical training:</span>
            <span className="text-center">{university.practical}</span>
          </li>
        </ul>
      </section>
      <section className='grid grid-cols-1 sm:grid-cols-2 items-start content-center justify-center justify-items-center gap-10 sm:gap-5 mt-25 px-10'>
        <div className='grid grid-cols-1 items-center content-center justify-center px-5'>
          <span className='text-center text-4xl w-full'>Courses subjects:</span>
          <ul className='list-disc list-outside mt-5'>
            {
              university.subjects.map((subject: string) => {
                return (
                  <li className='text-2xl sm:text-3xl text-center mt-2.5' key={subject}>
                    {subject}
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='grid grid-cols-1 items-center content-center justify-center px-5'>
          <span className='text-center text-4xl'>Qualification types:</span>
          <ul className='mt-5'>
            {
              university.qualifications.map((qualification: string) => {
                return (
                  <li className='text-2xl sm:text-3xl text-center mt-2.5' key={qualification}>
                    {qualification}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
      <section className='grid grid-cols-1 items-center pt-20 mt-20 border-t-5 border-(--accent) w-9/12 justify-self-center mb-10'>
        <span className='text-center text-4xl'>Contacts:</span>
        <ul className='mt-5 w-full flex flex-wrap items-center justify-center gap-10'>
            {
              Object.entries(university.contacts).map(([contact, link]: [string, string]) => {
                return (
                  <li className='text-2xl sm:text-3xl text-center mt-2.5 hover:text-(--accent) transition-colors duration-300 underline' key={contact}>
                    <a href={`${link}`}>{contact}</a>
                  </li>
                )
              })
            }
          </ul>
      </section>
    </>
  )
}