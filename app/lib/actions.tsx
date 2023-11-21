"use server"
import {sql} from "@vercel/postgres"
import { z } from 'zod';
import { redirect } from 'next/navigation';

export type State = {
    errors?: {
      content?: string[];
    };
    message?: string | null;
};

export async function createPost(prevState:State,formData:FormData){
     const content = String(formData.get("content"))
    try{
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        sql`insert into post (content) values (${content})`
    }catch{
        console.log("エラーだよーーーーーーーーーーーーーーーーーーーーーー")
        return{
            message: "aaa",
        }
    }
    redirect('/posts');
}

export async function updatePost(id:string,formData:FormData){
    const content = String(formData.get("content"))
    try{
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        sql`update post set content = ${content} where id = ${id}`
    }catch{
        console.log("エラーだよーーーーーーーーーーーーーーーーーーーーーー")
    }
    redirect('/posts');
}