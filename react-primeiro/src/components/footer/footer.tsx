import { useContext } from "react"
import { PostContext } from "../../contexts/PostContext"


export const Footer = () =>{

    const PostCtx = useContext(PostContext)

    return(
        <>
            <footer>
                numero de posts: {PostCtx?.post.length}
            </footer>
        </>
    )
}