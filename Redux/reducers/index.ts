import { combineReducers } from 'redux';
import posts from './posts';
import postById from './postById';
import sendComment from './sendComment';
import publishPost from '../sagas/publishPost';

export const rootReducer = combineReducers({
    posts,
    postById,
    sendComment,
    publishPost,
});
