import { PostType } from "../types/TypePost"

type AddPost = {
    type: "add";
    payload: {
        title: string
        body: string
    }
}
type RemovePost = {
    type:'Remove'
    payload: {
        id: number
    }
}


type PostReducerAction =  AddPost | RemovePost;

export const PostReducers = (posts:PostType[] , action: PostReducerAction ) => {
    switch(action.type) {
        case 'add':
           return[...posts, {
                id: posts.length,
                title: action.payload.title,
                body: action.payload.body
           }];
        case 'Remove':
            return posts.filter(p=> p.id !== action.payload.id);
        default:
            return posts;
    }
}