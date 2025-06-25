"use client"

import { useEffect, startTransition, useState, ChangeEvent } from "react";
import { setCookie } from "./cookieManager";
import { changingStyleParameter, IP_BACKEND } from "@/components/sharedObjects";
import axios from "axios";

type loginForm = {
  username: string,
  password: string
}

type registrationForm = loginForm & {
  repeatPassword: string,
  email: string
}

function isRegistrationForm(obj: loginForm | registrationForm): obj is registrationForm { // Checking if it's registration by email key
  return "email" in obj && "repeatPassword" in obj
}

export default function AccountManage() {
  useEffect(() => {
    startTransition(async () => {
      await setCookie("token", "1")
    })
  }, [])

  const [formValue, setformValue] = useState<loginForm | registrationForm>({username: "", password: ""});
  const [fillingBox, setFillingBox] = useState<changingStyleParameter>({switch: true, param: {}}) // Changinge between login/registration windows

  function changeFillingBox(){ // Change state between opened or closed filters
    if (fillingBox.switch){
      setFillingBox({...fillingBox, switch: !fillingBox.switch})
      setformValue({username: "", email: "", password: "", repeatPassword: ""}) // Setting registration form
    } else {
      setFillingBox({...fillingBox, switch: !fillingBox.switch})
      setformValue({username: "", password: ""}) // Setting login form
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { // Updating formValues on input from inputs
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async() => {
    if (formValue){
      if (isRegistrationForm(formValue)){ // Checking if it's registration
        if(formValue.password === formValue.repeatPassword){
          const loginFormData = new FormData();
          loginFormData.append("username", formValue.username)
          loginFormData.append("password", formValue.password)
          loginFormData.append("email", formValue.email)

          try {
            const response = await axios({
              method: "post",
              url: `${IP_BACKEND}/registration`,
              data: loginFormData,
              headers: { "Content-Type": "multipart/form-data" },
            });
            
            if (response.status == 200){
              console.log("Nice!")
            }
            
          } catch(error) {
            console.log(error)
          }
        } else {
          console.log("Passwords aren't same")
        }
        
      } else { // if it's login
        const loginFormData = new FormData();
        loginFormData.append("username", formValue.username)
        loginFormData.append("password", formValue.password)

        try {
          const response = await axios({
            method: "post",
            url: `${IP_BACKEND}/login`,
            data: loginFormData,
            headers: { "Content-Type": "multipart/form-data" },
          });

          if (response.status == 200){
            console.log("Nice Login!")
          }
        } catch(error) {
          console.log(error)
        }
      }
    } else {
      console.log("Error, mistypes")
    }
  }
  
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-repeat bg-cover bg-center bg-[url(../../public/images/profile/acoountManager/background.png)] bg-blend-darken bg-black/50">
      { isRegistrationForm(formValue) ?
        <section className={`${fillingBox.param.registrationBox} fixed transform-3d  grid grid-cols-1 items-center justify-items-center bg-white sm:hover:scale-110 rounded-xl p-5 transition-transform duration-500 ease-out`}>
          <h1 className="text-(--accent) text-4xl">Registration</h1>
          <button type="button" className='text-m sm:text-l text-center mt-2.5 hover:text-(--accent) transition-colors duration-300 underline cursor-pointer' onClick={changeFillingBox}>Already have account?</button>
          <form method="post" onSubmit={e => {e.preventDefault();handleSubmit()}} className="grid grid-cols-1 items-center justify-start content-center justify-items-start sm:w-100">
            <label className="pt-4 text-sm">Username</label>
            <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" value={formValue.username} onChange={handleChange} type="text" placeholder="Username..." name="username" required/>
            <label className="pt-4 text-sm">Email</label>
            <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" value={formValue.email} onChange={handleChange} type="email" placeholder="Email..." name="email" required/>
            <label className="pt-4 text-sm">Password</label>
            <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" value={formValue.password} onChange={handleChange} type="text" placeholder="Password..." name="password" required/>
            <label className="pt-4 text-sm">Repeat password</label>
            <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" value={formValue.repeatPassword} onChange={handleChange} type="text" placeholder="Password again..." name="repeatPassword" required/>
            <button className="bg-[#85c05d] justify-self-center px-1.75 py-0.5 mt-5 text-xl md:text-2xl text-black hover:text-white focus:text-white transition-colors duration-200 ease-out text-center rounded-3xl cursor-pointer" type="submit">Submit</button>
          </form>
        </section>
        :
        <section className={`${fillingBox.param.loginBox} fixed grid grid-cols-1 items-center justify-items-center bg-white sm:hover:scale-110 rounded-xl p-5 transition-transform duration-500 ease-out`}>
          <h1 className="text-(--accent) text-4xl">Login</h1>
          <button type="button" className='text-m sm:text-l text-center mt-2.5 hover:text-(--accent) transition-colors duration-300 underline cursor-pointer' onClick={changeFillingBox}>Don't have account?</button>
          <form method="post" onSubmit={e => {e.preventDefault();handleSubmit()}} className="grid grid-cols-1 items-center justify-start content-center justify-items-start sm:w-100">
            <label className="pt-4 text-sm">Username</label>
            <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" value={formValue.username} onChange={handleChange} type="text" placeholder="Username..." name="username" required/>
            <label className="pt-4 text-sm">Password</label>
            <input className="p-1 border-gray-500 border-1 hover:shadow-2xl hover:scale-105 outline-(--accent) focus:border-(--accent) shadow-gray-400 rounded-xl w-full transition-all duration-300" value={formValue.password} onChange={handleChange} type="text" placeholder="Password..." name="password" required/>
            <button className="bg-[#85c05d] justify-self-center px-1.75 py-0.5 mt-5 text-xl md:text-2xl text-black hover:text-white focus:text-white transition-colors duration-200 ease-out text-center rounded-3xl cursor-pointer" type="submit">Submit</button>
          </form>
          <a className='text-m sm:text-l text-center mt-4 hover:text-(--accent) transition-colors duration-300 underline cursor-pointer' href={`/forgot-password`}>Forgot password?</a>
        </section>
      }
    </div>
    </>
    
  );
}
