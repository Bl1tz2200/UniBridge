import Image from "next/image";
import university_image from "@/images/homePage/University.webp"
import logo from "@/logos/UniBridge.svg"
import universitySearch_icon from "@/icons/UniversitySearch.svg"
import actualInfo_icon from "@/icons/ActualInfo.svg"
import community_icon from "@/icons/Community.svg"
import instagram_icon from "@/icons/Instagram.svg"
import documents_image from "@/images/homePage/Documents.webp"
import studentMeeting_image from "@/images/homePage/StudentMeeting.webp"
import universityLife_image from "@/images/homePage/UniversityLife.webp"
import usaUniversity_image from "@/images/homePage/USAUniversity.webp"
import chinaUnversity_image from "@/images/homePage/ChinaUniversity.webp"
import germanyUniversity_image from "@/images/homePage/GermanyUniversity.webp"
import telegram_icon from "@/icons/Telegram.svg"


export default function Home() {
  return (
    <>
        <header className="pt-5 flex items-center justify-center">
          <div className="grid content-center justify-center justify-items-center w-11/12 h-220 bg-blend-darken bg-black/50 rounded-xl relative">
            <span className="m-5 text-5xl md:text-7xl text-(--accent) text-center font-(family-name:--font-rubik) font-semibold">UniBridge</span>
            <span className="m-3 w-10/12 text-xl md:text-3xl text-white text-center">A free platform that will become a bridge between dreams and reality.</span>
            <span className="m-3 w-10/12 text-xl md:text-3xl text-white text-center">The UniBridge provides structured data on admission to foreign universities: exams, application deadlines, and selection criteria.</span>
            <a href="/search" className="bg-[#85c05d] px-1.75 py-0.5 m-4 text-xl md:text-3xl text-black hover:text-white focus:text-white transition-colors duration-500 ease-out text-center rounded-3xl" >Start searching</a>
            <Image src={university_image} alt="University Image" fill className="-z-1 rounded-xl bg-cover" placeholder="blur" blurDataURL={"@/images/homePage/University.webp"} priority />
          </div>
        </header>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center justify-items-center content-center mt-47.5 px-5 md:px-15">
          <section className="grid grid-cols-1 w-[100%] md:w-10/12 items-center content-center justify-center justify-items-center">
            <span className="text-4xl md:text-5xl text-center pb-10 mb-10 border-b-3 w-7/12 font-semibold">About <span className="text-(--accent)">Us</span></span>
            <span className="text-l md:text-xl text-center">
              UniBridge is a platform for applicants where they can find structured information about admission to different countries. 
              The platform makes it easier to find the necessary data by combining relevant information and advice from current students. 
              UniBridge makes the admission process more accessible and convenient.
            </span>
          </section>
          <section className="items-center content-center justify-center justify-items-center">
            <div className="flex w-10/12 overflow-hidden items-center justify-center">
              <Image src={ logo } alt="UniBridge Logo" placeholder="blur" blurDataURL={"@/logos/UniBridge.svg"} loading="lazy"/>
            </div>
            <span className="text-4xl sm:text-6xl md:text-7xl text-center font-(family-name:--font-rubik) font-bold">UniBridge</span>
          </section>
        </div>
        <div className="grid grid-cols-1 items-center content-center justify-center justify-items-center mt-47.5">
          <section className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
            <span className="text-2xl md:text-4xl font-bold mb-5 text-center">Why UniBridge?</span>
            <span className="text-l md:text-2xl 8/12 md:w-6/12 text-center px-2.5">Learn about the benefits of UniBridge: search for universities, study requirements, read student reviews, and access resources to help at every stage.</span>
          </section>
          <section className="grid grid-cols-1 mt-25 gap-22.5 items-center content-center justify-center justify-items-center w-11/12 md:w-8/12">
            <div className="flex justify-between w-12/12 md:w-10/12">
              <div className="flex w-30 h-30 items-center justify-center relative"><Image src={universitySearch_icon} fill={true} alt="universitySearch_icon" placeholder="blur" blurDataURL={"@/icons/UniversitySearch.svg"} loading="lazy"/></div>
               <div className="grid grid-cols-1 items-center content-center w-12/12 md:w-10/12 ml-10">
                <span className="text-l sm:text-xl md:text-2xl font-semibold mb-1">
                  Search by Countries
                </span>
                <span className="text-sm sm:text-l md:text-xl">
                  At UniBridge you have opportunity to find information about admission to universities in different countries.
                </span>
               </div>
            </div>
            <div className="flex justify-between w-12/12 md:w-10/12">
              <div className="flex w-30 h-30 items-center justify-center relative"><Image src={actualInfo_icon} fill={true} alt="ActualInfo_icon" placeholder="blur" blurDataURL={"@/icons/ActualInfo.svg"} loading="lazy"/></div>
               <div className="grid grid-cols-1 items-center content-center w-12/12 md:w-10/12 ml-10">
                <span className="text-l sm:text-xl md:text-2xl font-semibold mb-1">
                  Up-to-date information about admission
                </span>
                <span className="text-sm sm:text-l md:text-xl">
                  We have access to up-to-date information about required exams, application deadlines, and other admission requirements.
                </span>
               </div>
            </div>
            <div className="flex justify-between w-12/12 md:w-10/12">
              <div className="flex w-30 h-30 items-center justify-center relative"><Image src={community_icon} fill={true} alt="Community_icon" placeholder="blur" blurDataURL={"@/icons/Community.svg"} loading="lazy"/></div>
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
        <div className="mt-47.5">
          <section className="w-[100%]">
            <div className="grid content-center justify-center justify-items-center w-[100%] h-220 bg-fixed bg-center bg-cover bg-[url(../../public/images/homePage/Cambridge.webp)] bg-blend-darken bg-black/60 relative">
              <span className="pb-5 text-2xl sm:text-5xl md:text-7xl border-b-1 border-white text-white text-center">Internationality</span>
              <span className="mb-3 mt-5 w-10/12 text-base sm:text-xl md:text-3xl text-white text-center">Our website provides information about admission to different countries, such as the USA, China, Germany and many others. In addition, you can find useful articles and videos about their cultural peculiarities.</span>
              <span className="m-3 w-10/12 text-base sm:text-xl md:text-3xl text-white text-center">You can get acquainted with the deadlines for submitting documents and the experience of other students right now!</span>
            </div>
          </section>
        </div>
        <div className="mt-47.5">
            <section className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
              <span className="text-2xl md:text-4xl font-bold mb-5 text-center">Resources</span>
              <span className="text-xl md:text-2xl 8/12 md:w-6/12 text-center">Use our collection of resources: articles and application tools with ideas and tips.</span>
            </section>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center content-center justify-items-center w-[100%] md:w-11/12 mx-auto px-2.5 md:px-10 mt-25">
            <li className="w-11/12 md:w-9/12">
              <section className="justify-between flex items-center border-b-2 border-gray-600 mb-2 pb-2">
                <span className="text-xl">Information about entrance exams</span><span className="font-bold text-xl">Free</span>
              </section>
              <section className="text-base">
                A list of exams required for admission to different countries.
              </section>
            </li>
            <li className="w-11/12 md:w-9/12">
              <section className="justify-between flex items-center border-b-2 border-gray-600 mb-2 pb-2">
                <span className="text-xl">Deadlines for submitting documents</span><span className="font-bold text-xl">Free</span>
              </section>
              <section className="text-base">
                The start and end dates for accepting applications to universities in different countries.
              </section>
            </li>
            <li className="w-11/12 md:w-9/12">
              <section className="justify-between flex items-center border-b-2 border-gray-600 mb-2 pb-2">
               <span className="text-xl">Motivation letters</span><span className="font-bold text-xl">Free</span>
              </section>
              <section className="text-base">
                Examples and tips for writing motivation letters for admission.
              </section>
            </li>
            <li className="w-11/12 md:w-9/12">
              <section className="justify-between flex items-center border-b-2 border-gray-600 mb-2 pb-2">
               <span className="text-xl">Student experience</span><span className="font-bold text-xl">Free</span>
              </section>
              <section className="text-base">
                Reviews and experiences of current students about studying and living in different countries.
              </section>
            </li>
            <li className="w-11/12 md:w-9/12">
              <section className="justify-between flex items-center border-b-2 border-gray-600 mb-2 pb-2">
               <span className="text-xl">Application Guidelines</span><span className="font-bold text-xl">Free</span>
              </section>
              <section className="text-base">
                Detailed instructions and guidelines on the application process for foreign universities.
              </section>
            </li>
            <li className="w-11/12 md:w-9/12">
              <section className="justify-between flex items-center border-b-2 border-gray-600 mb-2 pb-2">
                <span className="text-xl">University Search Tools</span><span className="font-bold text-xl">Free</span>
              </section>
              <section className="text-base">
                Useful tools and resources for searching and comparing universities according to various criteria.
              </section>
            </li>
          </ul>
        </div>
        <div className="mt-47.5 grid grid-cols-1 gap-30">
          <section className="flex flex-wrap items-center justify-center justify-items-center gap-20">
            <div className="flex w-75 h-100 sm:w-100 sm:h-125 md:w-125 md:h-150 items-end md:items-center px-3 transition-transform duration-1000 hover:scale-105">
              <Image src={usaUniversity_image} alt="USA University Photo" width={720} height={960} placeholder="blur" blurDataURL={"@/images/homePage/USAUniversity.webp"} loading="lazy"/>
            </div>
            <div className="grid grid-cols-1 items-center content-center justify-items-center w-11/12 md:w-5/12 px-5 md:px-3">
              <header className="grid grid-cols-1 items-center justify-items-center">
                <span className="text-(--accent) text-xl sm:text-3xl text-center">
                  ADMISSION TO THE USA
                </span>
                <span className="text-xs sm:text-base text-gray-500 mt-2 text-center border-(--accent) border-b-2 w-10/12 mb-7.5 pb-7.5">
                  United States of America is a country of freedom and opportunity, where education has maintained it's prestige for many years.
                </span>
              </header>
              <section className="grid grid-cols-1 items-center content-center justify-items-center">
                <span className="font-bold text-base sm:text-xl">
                  Features of admission to universities in the USA:
                </span>
                <ul className="mt-5 grid grid-cols-1 list-disc gap-5 text-sm sm:text-l">
                  <li>
                    States universities mainly pay attention to the applicant's personality. That is why motivation and recommendation letters are among the crucial ones when applying for documents.
                  </li>
                  <li>
                    When doing extracurricular activities, you should do it thoughtfully and select them for your future career. For example, if you are going to the journalism faculty, then media volunteering would be a great option.
                  </li>
                  <li>
                    The following assessments are taken into account: GPA, SAT/ACT (Bachelor's degree) or GRE/GMAT (Master's degree) results.
                  </li>
                </ul>
              </section>
            </div>
          </section>
          <section className="flex flex-wrap-reverse items-center justify-center justify-items-center gap-20">
            <div className="grid grid-cols-1 items-center content-center justify-items-center w-11/12 md:w-5/12 px-5 md:px-3">
              <header className="grid grid-cols-1 items-center justify-items-center">
                <span className="text-xl sm:text-3xl text-center">
                  EDUCATION IN CHINA
                </span>
                <span className="text-xs sm:text-base text-green-700 mt-2 text-center font-bold">
                  China is one of the fastest-growing countries in the world, whose education never stands still.
                </span>
              </header>
              <section className="grid grid-cols-1 items-center content-center justify-items-center mt-10">
                <ul className="grid grid-cols-1 list-disc gap-5 text-sm sm:text-l md:text-xl">
                  <li>
                    Chinese education is aimed at obtaining fundamental knowledge, so STEM fields are taught here at the highest level.
                  </li>
                  <li>
                    There are compulsory entrance exams to many universities.
                  </li>
                  <li>
                    Most often, even in an English program, in addition to IELTS/TOEFL, an HSK Chinese language proficiency certificate from level 3 may be required.
                  </li>
                  <li>
                    Motivation and recommendation letters are also required for international students.
                  </li>
                </ul>
              </section>
            </div>
            <div className="flex w-75 h-100 sm:w-100 sm:h-125 md:w-125 md:h-150 items-end md:items-center px-3 transition-transform duration-1000 hover:scale-105">
              <Image src={chinaUnversity_image} alt="China University Photo" width={720} height={960} placeholder="blur" blurDataURL={"@/images/homePage/ChinaUniversity.webp"} loading="lazy" />
            </div>
          </section>
          <section className="flex flex-wrap items-center justify-center justify-items-center gap-20">
            <div className="flex w-75 h-100 sm:w-100 sm:h-125 md:w-125 md:h-150 items-end md:items-center px-3 transition-transform duration-1000 hover:scale-105">
              <Image src={germanyUniversity_image} alt="Germany University Photo" width={720} height={960} placeholder="blur" blurDataURL={"@/images/homePage/GermanyUniversity.webp"} loading="lazy" />
            </div>
            <div className="grid grid-cols-1 items-center content-center justify-items-center w-11/12 md:w-5/12 px-5 md:px-3">
              <header className="grid grid-cols-1 items-center justify-items-center">
                <span className="text-(--accent) text-xl sm:text-3xl text-center border-black border-b-2 w-6/12 mb-5 pb-5">
                  APPLY IN GERMANY
                </span>
                <span className="text-xs sm:text-base text-gray-500 w-10/12 mt-2 text-center">
                  Germany is a country with a global reputation in education, where many universities provide free undergraduate education.
                </span>
              </header>
              <section className="grid grid-cols-1 items-center content-center justify-items-center mt-10">
                <ul className="grid grid-cols-1 list-disc gap-5 text-sm sm:text-base md:text-l">
                  <li>
                    Studying in Germany is incredibly comfortable due to the systematic and well-coordinated system.
                  </li>
                  <li>
                    To study in German, a TestDaF (C1) or Goethe-Zertifikat C1 certificate is required. IELTS / TOEFL / Duolingo exams are required for English-language programs.
                  </li>
                  <li>
                    However, there is an exception: some technical universities accept students without language certificates, but with an interview.
                  </li>
                  <li>
                    Motivation and recommendation letters are also required from international students along with extracurricular activities.
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>
        <div className="mt-47.5">
          <section className="grid grid-cols-1 items-center content-center justify-center justify-items-center">
              <span className="text-2xl md:text-4xl font-bold mb-5 text-center">Impressions and inspiration</span>
              <span className="text-xl md:text-2xl w-10/12 md:w-8/12 text-center">Keep an eye out for new blog articles about applying to university: tips on motivation letters, exams, and choosing a program for your success.</span>
            </section>
            <section>
              <ul className="flex flex-wrap items-center gap-15 justify-center content-center justify-items-center px-10 mt-10">
                <li className="grid grid-cols-1 justify-items-center content-center items-center gap-2.5 md:gap-5 w-100">
                  <section className="sm:h-100 hover:scale-105 duration-1000 transition-transform">
                    <Image className="rounded-xl" src={documents_image} placeholder="blur" blurDataURL={"@/images/homePage/Documents.webp"} alt="Documents" loading="lazy" />
                  </section>
                  <section className="grid grid-cols-1 justify-items-center h-50 content-between justify-center ">
                    <span className="text-center text-2xl pointer-events-none">Information about admission</span>
                    <span className="text-sm md:text-base pointer-events-none">Learn about the required exams, deadlines for submission, and requirements for motivation letters for admission to foreign universities.</span>
                    <a href="/" className="mt-1 bg-(--accent) px-1.5 py-0.5 text-xl md:text-2xl text-black hover:text-white focus:text-white transition-colors duration-500 ease-out text-center rounded-3xl">Find out more</a>
                  </section>
                </li>
                <li className="grid grid-cols-1 justify-items-center content-center items-center gap-2.5 md:gap-5 w-100">
                  <section className="sm:h-100 hover:scale-105 duration-1000 transition-transform">
                    <Image className="rounded-xl" src={studentMeeting_image} placeholder="blur" blurDataURL={"@/images/homePage/StudentMeeting.webp"}  alt="Student Meeting" loading="lazy" />
                  </section>
                  <section className="grid grid-cols-1 justify-items-center h-50 content-between justify-center">
                    <span className="text-center text-2xl pointer-events-none">Feedback</span>
                    <span className="text-sm md:text-base pointer-events-none">Get to know the opinions and experiences of students studying in different countries to better understand the specifics of studying and living abroad.</span>
                    <a href="/" className="mt-1 bg-(--accent) px-1.5 py-0.5 text-xl md:text-2xl text-black hover:text-white focus:text-white transition-colors duration-500 ease-out text-center rounded-3xl">Find out more</a>
                  </section>
                </li>
                <li className="grid grid-cols-1 justify-items-center content-center items-center gap-2.5 md:gap-5 w-100">
                  <section className="sm:h-100 hover:scale-105 duration-1000 transition-transform">
                    <Image className="rounded-xl" src={universityLife_image} placeholder="blur" blurDataURL={"@/images/homePage/UniversityLife.webp"} alt="UniversityLife" loading="lazy" />
                  </section>
                  <section className="grid grid-cols-1 justify-items-center h-50 content-between justify-center">
                    <span className="text-center text-2xl pointer-events-none">Articles and tips</span>
                    <span className="text-sm md:text-base pointer-events-none">Read useful articles about motivation letters, exam preparation, and choosing a study program on the UniBridge blog.</span>
                    <a href="/" className="mt-1 bg-(--accent) px-1.5 py-0.5 text-xl md:text-2xl text-black hover:text-white focus:text-white transition-colors duration-500 ease-out text-center rounded-3xl">Find out more</a>
                  </section>
                </li>
              </ul>
            </section>
        </div>
        <footer className="mt-47.5 bg-(--foreground) p-10 grid grid-cols-1 content-center" >
            <span className="text-white text-xl text-center font-semibold pointer-events-none">Our contacts:</span>
            <ul className="w-[100%] flex items-center justify-center flex-wrap mt-5 gap-5">
              <li>
                <a href="/" className="flex items-center justify-center gap-2.5 transition-transform duration-200 hover:scale-110 focus:scale-110">
                  <Image src={instagram_icon} width={50} height={50} placeholder="blur" blurDataURL={"@/icons/Instagram.svg"} alt="Instagram" loading="lazy" />
                  <span className="text-white text-3xl transition-colors duration-200 hover:text-(--accent) focus:text-(--accent)" >withUniBridge</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/withUniBridge" className="flex items-center justify-center gap-2.5 transition-transform duration-200 hover:scale-110 focus:scale-110">
                  <Image src={telegram_icon} width={50} height={50} placeholder="blur" blurDataURL={"@/icons/Telegram.svg"} alt="Telegram" loading="lazy" />
                  <span className="text-white text-3xl transition-colors duration-200 hover:text-(--accent) focus:text-(--accent)" >withUniBridge</span>
                </a>
              </li>
            </ul>
        </footer>
    </>
    
  );
}
