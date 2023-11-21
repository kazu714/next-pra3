"use client"

import { useFormState } from "react-dom"
import {createPost} from "@/app/lib/actions"

export default function Page() {
    const initialState = {message:"",errors: {}}
    const [state, dispach] = useFormState(createPost,initialState)
    return(
        <div>
            投稿作成ページ
            <form action={dispach}>
                <input type="text" name="content"/>
                <button type="submit">投稿する</button>
            </form>
        </div>
    )
}