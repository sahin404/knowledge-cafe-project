import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, time}) => {
    return (
        <div className="w-1/3 mt-8 md:mt-0 ml-10 md:ml-0">
            <div>
                <h1 className='bg-gray-200 p-5 rounded-lg mb-4 text-xl font-bold text-center'>Spent Time on Read: {time}</h1>
            </div>
            <h1 className='mb-4 text-2xl font-bold'>Bookmarked Blog: {bookmarks.length} </h1>
            {
                bookmarks.map((bookmark,idx)=><Bookmark 
                key={idx}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    time:PropTypes.number,
    // modifyList: PropTypes.func
}
export default Bookmarks;