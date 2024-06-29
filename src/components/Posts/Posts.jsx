import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts]= useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data=> setPosts(data));
    },[])
    return (
        <div className="w-2/3 space-y-10">
            {/* <h1>Post Section</h1> */}
            {
                posts.map((post, idx)=><Post 
                key={idx}
                post= {post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;