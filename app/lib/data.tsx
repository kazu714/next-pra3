import {sql} from "@vercel/postgres"
import { unstable_noStore } from "next/cache"

export async function fetchPosts(){
    unstable_noStore()
    try{
        const posts = await sql`select * from post`
        return posts
    }catch(error){
        console.log("エラーだよーーーーーーーーーーーーーーーーーーーー")
    }
}

export async function fetchPost(id:string){
    unstable_noStore()
    try{
        const post = await sql`select * from post where id = ${id}`
        console.log(post)
        return post
    }catch(error){
        console.log("エラーだよーーーーーーーーーーーーーーーーーーーー")
    }
}

export async function fetchPostsByQuery(query:string){
    unstable_noStore()
    console.log(query,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    try{
        const post = await sql`select * from post where content ILIKE ${`%${query}%`}`
        console.log(post,"ポストーーーーーーーーーーーーー")
        return post
    }catch(error){
        console.log("エラーだよーーーーーーーーーーーーーーーーーーーー")
    }
}