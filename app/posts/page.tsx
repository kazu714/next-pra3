import {fetchPosts, fetchPostsByQuery} from "@/app/lib/data"
import Search from "@/app/ui/search"

export default async function Page({searchParams}:{searchParams:{query:string}}){
    const query = searchParams?.query || ""
    let posts = null
    if(query){
        posts = await fetchPostsByQuery(query)
    }else{
        posts = await fetchPosts()
    }   
    
   
    return(
        <>
            投稿一覧
            {posts && posts.rows.map((post) => {
                return(
                    <div key={post.id}>
                        id:{post.id} <br />
                        content:{post.content}
                    </div>
                )
            })}

            <Search/>
        </>
    )
}

















// import {fetchPosts} from "@/app/lib/data"

// export default async function Page(){
//     const posts = await fetchPosts()
//     console.log(posts)
//     return(
//         <>
//             投稿一覧
//             {posts && posts.rows.map((post) => {
//                 return(
//                     <div key={post.id}>
//                         id:{post.id} <br />
//                         content:{post.content}
//                     </div>
//                 )
//             })}
//         </>
//     )
// }

