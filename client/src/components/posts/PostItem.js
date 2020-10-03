import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { updateLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  updateLike,
  removeLike,
  deletePost,
  showCustomPost,
}) => {
  return (
    <div className='posts'>
      <div className='post bg-white p-1 my-1'>
        <div>
          <Link to={`/profile/${user}`}>
            <img className='round-img' src={avatar} alt='' />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <p className='my-1'>{text}</p>
          <p className='post-date'>
            Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
          </p>
          {showCustomPost && (
            <>
              <button
                onClick={() => updateLike(_id)}
                type='button'
                className='btn btn-light'
              >
                <i className='fa fa-thumbs-up'></i>
                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
              </button>
              <button
                onClick={() => removeLike(_id)}
                type='button'
                className='btn btn-light'
              >
                <i className='fa fa-thumbs-down'></i>
              </button>
              <Link to={`/posts/${_id}`} className='btn btn-primary'>
                Discussion{' '}
                {comments.length > 0 && (
                  <span className='comment-count'>{comments.length}</span>
                )}
              </Link>
              {!auth.loading && user === auth.user._id && (
                <button
                  onClick={() => deletePost(_id)}
                  type='button'
                  className='btn btn-danger'
                >
                  <i className='fa fa-times'></i>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showCustomPost: true,
  auth: PropTypes.object.isRequired,
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  updateLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateLike, removeLike, deletePost })(
  PostItem
);
