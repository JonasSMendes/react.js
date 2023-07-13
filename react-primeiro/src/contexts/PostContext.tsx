import { ReactNode, createContext, useReducer, useState } from "react";
import { PostType } from "../types/TypePost";
import { PostReducers } from "../reducers/postReducer";
import { ListReducer } from "../reducers/listReducer";

type PostsType = {
    post: PostType[]
    addPost: (title: string, body: string) => void
    RemovePost: (id: number) => void
}

export const PostContext = createContext<PostsType | null>(null)

type props = {children: ReactNode}

export const PostProvider = ({children}:props) => {


    const[post , dispatch] = useReducer(PostReducers, []) 

    const addPost = (title: string , body: string) => {
       dispatch({
        type:'add',
        payload:{
            body: body,
            title: title
        }
       })
    }

    const RemovePost = (id: number) =>{
        dispatch({
            type: 'Remove',
            payload:{
                id: id
            }
        })
    }

    return(
        <>
            <PostContext.Provider value={{post, addPost, RemovePost}}>
                {children}
            </PostContext.Provider>
        </>
    )
}