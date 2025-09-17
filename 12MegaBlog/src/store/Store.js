import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';

const Store = configureStore({
    reducer: {
        auth : AuthSlice
        // todo: add more slice here for posts
    }
});


export default Store;