import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {blog_title} = bookmark;
    return (
        <div className='bg-gray-200 mb-4 p-4 rounded-lg'>
            <h1>{blog_title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;