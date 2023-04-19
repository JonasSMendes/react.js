import { Post } from "../types/post"


type Props={
    data: Post
}

export const PostItem=({data}:Props)=>{
    return(
        <div>
        <br /> <br />
      <h4 className="font-bold" >{data.title}</h4> 
      <small>#{data.id} -usuario- {data.userId}</small>
      <p>{data.body}</p>  
      </div>
    )
}