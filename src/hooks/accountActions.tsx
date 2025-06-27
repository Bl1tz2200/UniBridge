"use server"

import axios, { AxiosError } from "axios";
import { delCookie, getCookie, setCookie } from "./cookieManager";
import { IP_BACKEND, userData } from "@/components/sharedObjects";

export async function updateShortToken(): Promise<{error: boolean, message: string}> {
    const longToken = await getCookie("tokenLong")

    if(longToken.value){
        try{
            const response = await axios({
            method: "post",
            url: `${IP_BACKEND}/updateToken`,
            data: {tokenLong: longToken.value},
            });

            await setCookie("tokenShort", response.data.tokenShort)
        
            return {error: false, message: ""}
        } catch(error) { // If we've got error answer from server
            await delCookie("tokenLong")
            await delCookie("tokenShort")

            const status = (error as AxiosError)?.response?.status
            if (status == 401){
                return {error: true, message: "Try to relogin!"}
            } else {
                return {error: true, message: "Checking token on server error!"}
            }   
        }
        
    } else{
        await delCookie("tokenLong")
        await delCookie("tokenShort")
        return {error: true, message: "Getting long token error!"}
    }
}

export async function getUserData(): Promise<{error: boolean, message: string, userdata: userData | undefined}> {
    const shortToken = await getCookie("tokenShort")

    if(shortToken.value){
        try{
            const response = await axios({
            method: "get",
            url: `${IP_BACKEND}/getuserdata`,
            data: {tokenShort: shortToken.value},
            });
        
            return {error: false, message: "", userdata: {username: response.data.username, email: response.data.email}}
        } catch(error) { // If we've got error answer from server
            const status = (error as AxiosError)?.response?.status
            if (status == 401){
                const {error, message} = await updateShortToken() // If short token is expired - update it 
                return error ? {error: true, message: message, userdata: undefined} : await getUserData() // Try to get user data again if no errors while updating short token
            } else {
                delCookie("tokenLong")
                delCookie("tokenShort")
                return {error: true, message: "Checking token on server error! Try to login into account again!", userdata: undefined}
            }   
        }
        
    } else{
        const {error, message} = await updateShortToken() // If there aren't short token then get it 
         return error ? {error: true, message: message, userdata: undefined} : await getUserData() // Try to get user data again if no errors while updating short token
    }
}