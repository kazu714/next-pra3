"use client"
import { useEffect } from "react"

export default function Error({error,reset}:{error:Error & {digest?:string},reset:() => void}){
    useEffect(()=>{
        console.log(error,"エラーだよーーーーーーーーーーー")
    },[error])
    return(
        <div>
            error画面
        </div>
    )
}