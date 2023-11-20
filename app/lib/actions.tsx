"use server"
import {sql} from "@vercel/postgres"

export async function createPost(prevState,formData){
    const content = formData.get("content")
    try{
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        sql`insert into post (content) values (${content})`
    }catch{
        console.log("エラーだよーーーーーーーーーーーーーーーーーーーーーー")
    }
}

export async function updatePost(id,formData){
    const content = formData.get("content")
    try{
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        sql`update post set content = ${content} where id = ${id}`
    }catch{
        console.log("エラーだよーーーーーーーーーーーーーーーーーーーーーー")
    }
}