import {fetchPosts} from "@/app/lib/data"

export default async function Page(){
    const posts = await fetchPosts()
    console.log(posts)
    return(
        <>
            投稿一覧
            {posts.rows.map((post) => {
                return(
                    <div>
                        id:{post.id} <br />
                        content:{post.content}
                    </div>
                )
            })}
        </>
    )
}

