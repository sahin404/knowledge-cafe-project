import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-gray-200 mb-4 p-4 rounded-lg'>
            <h1>{bookmark}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.string
}

export default Bookmark;