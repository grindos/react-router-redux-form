import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

const PostsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, value => value.id);
    default:
      return state;
  }
};

export default PostsReducer;
