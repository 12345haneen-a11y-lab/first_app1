import Link from "next/link";
export default function Posts(props) {
    return (     
    <>
        <div className="div1">
        <h1>You are being get started</h1>
        </div>
       <div className="div2">
 
          {props.posts.map(post=>(
                <a href={`posts/${post.id}`} key={post.id}>
                 {post.title}
            </a>
        ))}

       </div>
    </>
    )
}
export async function getStaticProps(){
    /*fetcc api اللي انا عمالاه*/
        const req = await fetch("http://localhost:3000/api/posts")

        const data = await req.json();

        return{
            props:{
                posts: data
            }
        }
}

