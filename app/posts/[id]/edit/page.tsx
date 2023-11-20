
import { fetchPost } from "@/app/lib/data"
import {updatePost} from "@/app/lib/actions"


export default async function Page({params}){
    console.log(params,"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
    const post = await fetchPost(params.id)

    const updatePostById = updatePost.bind(null,params.id)

    return(
        <div>
            編集
            <form action={updatePostById}>
                <input type="text" name="content" defaultValue={post.rows[0].content}/>
                <button type="submit">変更する</button>
            </form>
        </div>
    )
}