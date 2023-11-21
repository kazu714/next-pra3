"use client"
import {useState} from "react"
import { Redirect } from "next"
import { usePathname,useSearchParams,useRouter } from "next/navigation"

export default function Search(){
    const[searchWord,setSearchWord] = useState("")

    function handleChange(e:any) {
        console.log( typeof e)
        setSearchWord(e.target.value)
    }

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const {replace} = useRouter()

    function handleClick(){
        console.log(searchWord,"検索ボタンが押されました")
        const params = new URLSearchParams(searchParams);
        if(searchWord){
            params.set("query",searchWord)
        }else{
            params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
    }
    return(
        <div>
            検索機能
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>検索する</button>
            {searchWord}
        </div>
    )
}