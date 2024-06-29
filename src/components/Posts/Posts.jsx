import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";
import PropTypes from 'prop-types';

const Posts = ({handleBookmarks, handleTime}) => {
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
                handleBookmarks={handleBookmarks}
                handleTime={handleTime} 
                ></Post>)
            }
        </div>
    );
};

Posts.propTypes={
    handleBookmarks: PropTypes.func,
    handleTime: PropTypes.func

}

export default Posts;