import PropTypes from 'prop-types';
import { BsBookmarkStar } from "react-icons/bs";
const Post = ({post, handleBookmarks, handleTime}) => {
    const {blog_tags,blog_title,reading_time, cover_photo, author_post_date, author_name, author_image} = post;
    return (
        <div className='space-y-4 ml-10 md:ml-4 lg:ml-0'>
            <img className='rounded-lg' src={cover_photo} alt="" />
            <div className=' space-y-4 md:space-y-0 md:flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img className='w-14' src={author_image} alt="" />
                    <div>
                        <h1 className='text-xl font-bold'>{author_name}</h1>
                        <h1 className='text-sm'>{author_post_date}</h1>
                    </div>
                </div>
                <div className=' flex gap-4 items-center text-lg'>
                    <h1>{reading_time} Min Read</h1>
                    <button onClick={()=>handleBookmarks(blog_title)}><BsBookmarkStar /></button>
                </div>
            </div>
            <div>
                <h1 className='text-3xl md:text-4xl font-bold'>{blog_title}</h1>
            </div>
            <div>
                {
                    blog_tags.map((tag,idx)=><span key={idx}> #{tag}</span>)
                }
            </div>
            <div className='text-blue-600 font-bold'>
                <button onClick={()=>handleTime(reading_time)} className='underline'>Mark as read</button>
            </div>
        </div>
    );
};

Post.propTypes ={
    post:PropTypes.object,
    handleBookmarks: PropTypes.func,
    handleTime: PropTypes.func
}
export default Post;