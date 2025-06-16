import Image from "next/image";
import logo from "../../public/UniBridge_Logo.svg"
import universitySearch_icon from "../../public/UniversitySearch_Icon.svg"
import actualInfo_icon from "../../public/ActualInfo_Icon.svg"
import community_icon from "../../public/Community_Icon.svg"

export default function Home() {
  return (
    <>
        <header className="pt-5 flex items-center justify-center">
          <div className="grid content-center justify-center justify-items-center w-11/12 h-220 bg-center bg-cover bg-[url(./img/University_MainPage.jpg)] bg-blend-darken dark:bg-black/50 rounded-xl">
            <span className="m-5 text-5xl md:text-7xl text-[#85c05d] text-center font-(family-name:--font-rubik) font-semibold">UniBridge</span>
            <span className="m-3 w-10/12 text-xl md:text-3xl text-white text-center">A free platform that will become a bridge between dreams and reality.</span>
            <span className="m-3 w-10/12 text-xl md:text-3xl text-white text-center">The UniBridge provides structured data on admission to foreign universities: exams, application deadlines, and selection criteria.</span>
            <a href="/search" className="bg-[#85c05d] px-1.5 py-0.5 m-4 text-xl md:text-3xl text-black hover:text-white focus:text-white transition-colors duration-500 ease-out text-center rounded-2xl" >Start searching</a>
          </div>
        </header>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center justify-items-center content-center mb-15 md:mb-30 md:mt-10 p-15">
          <section className="grid grid-cols-1 w-[100%] md:w-10/12 items-center content-center justify-center justify-items-center mt-5 md:mt-15">
            <span className="text-4xl md:text-5xl text-center py-10 mb-10 border-b-3 w-7/12 font-semibold">About <span className="text-[#85c05d]">Us</span></span>
            <span className="text-l md:text-2xl text-center">
              UniBridge is a platform for applicants where they can find structured information about admission to different countries. 
              The platform makes it easier to find the necessary data by combining relevant information and advice from current students. 
              UniBridge makes the admission process more accessible and convenient.
            </span>
          </section>
          <section className="items-center content-center justify-center justify-items-center">
            <div className="flex w-10/12 overflow-hidden items-center justify-center">
              <Image src={ logo } alt="UniBridge Logo"/>
            </div>
            <span className="text-4xl sm:text-6xl md:text-7xl text-center font-(family-name:--font-rubik) font-bold">UniBridge</span>
          </section>
        </div>
        <div className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
          <section className="text-2xl md:text-4xl font-bold m-5 text-center">Why UniBridge?</section>
          <section className="text-xl md:text-2xl 8/12 md:w-6/12 text-center mb-15">Learn about the benefits of UniBridge: search for universities, study requirements, read student reviews, and access resources to help at every stage.</section>
          <section className="grid grid-cols-1 items-center content-center justify-center justify-items-center w-8/12">
            <div className="flex justify-between w-12/12 md:w-10/12 my-12.5">
              <div className="flex w-30 h-30 items-center justify-center relative -z-1"><Image src={universitySearch_icon} fill={true} alt="universitySearch_icon" /></div>
               <div className="grid grid-cols-1 items-center content-center w-12/12 md:w-10/12 ml-10">
                <span className="text-l sm:text-xl md:text-2xl font-semibold mb-1">
                  Search by Countries
                </span>
                <span className="text-sm sm:text-l md:text-xl">
                  At UniBridge you have opportunity to find information about admission to universities in different countries.
                </span>
               </div>
            </div>
            <div className="flex justify-between w-12/12 md:w-10/12 my-12.5">
              <div className="flex w-30 h-30 items-center justify-center relative -z-1"><Image src={actualInfo_icon} fill={true} alt="ActualInfo_icon" /></div>
               <div className="grid grid-cols-1 items-center content-center w-12/12 md:w-10/12 ml-10">
                <span className="text-l sm:text-xl md:text-2xl font-semibold mb-1">
                  Up-to-date information about admission
                </span>
                <span className="text-sm sm:text-l md:text-xl">
                  We have access to up-to-date information about required exams, application deadlines, and other admission requirements.
                </span>
               </div>
            </div>
            <div className="flex justify-between w-12/12 md:w-10/12 my-12.5">
              <div className="flex w-30 h-30 items-center justify-center relative -z-1"><Image src={community_icon} fill={true} alt="Community_icon" /></div>
               <div className="grid grid-cols-1 items-center content-center w-12/12 md:w-10/12 ml-10"> 
                <span className="text-l sm:text-xl md:text-2xl font-semibold mb-1">
                  Community
                </span>
                <span className="text-sm sm:text-l md:text-xl">
                  Here you can read student reviews about studying and living in different countries.
                </span>
               </div>
            </div>
          </section>
        </div>
    </>
    
  );
}
