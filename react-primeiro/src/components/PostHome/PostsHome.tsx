import { useContext, useState } from "react"
import { PostContext } from "../../contexts/PostContext"



export const PostsHome = () =>{

    const PostCtx = useContext(PostContext)
    
    const [title, setTitle] = useState('')
    const [body , setBody] = useState('')
    

    const handleClick = () =>{
        if(body !== '' && title !== '' ){
            PostCtx?.addPost(title, body)

            setBody('')
            setTitle('')
        }
    }

    const handleRemoveItem = (id: number) =>{
        PostCtx?.RemovePost(id)
    }

    return(
        <>
            <span>seu nome</span><br />
            <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="seu nome"/> <br />
            <span>seu post</span><br />
            <input value={body} onChange={e => setBody(e.target.value)} type="text" /> <br />
            <button onClick={handleClick} >Postar</button>


            {PostCtx?.post.map( i =>(
               <div key={i.id}>
                <h3>usuario: {i.title}</h3>
                <span>{i.body}</span> <br />
                <button onClick={() =>handleRemoveItem(i.id)}>apagar</button>
                <br /><br />
               </div>
            ))}

        </>
    )
}