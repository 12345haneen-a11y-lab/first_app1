export default function Post1(props) {
    return (
     
     <>
     <div className="div1">
        <h1>Your Post Is : </h1>
     </div>
      <div className="div2">
        <p><span>Title : </span>{props.post.title}</p>
        <p><span>Your post : </span>{props.post.body}</p>
     </div>
     </>
    )
  }
   
  export async function getStaticPaths(){
    const req = await fetch("http://localhost:3000/api/posts")

    const data = await req.json();
    

    const paths = data.map(d => {
      return{
        params: {id:`${d.id}`}
      }
    })

    return{
      paths: paths,
      fallback: false,
    }
  }
  export async function getStaticProps(context){
      const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`)
      const data = await (await res).json();

      return{
        props :{
          post : data
        }
      }
  }