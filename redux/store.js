import redux, { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {filmsSliceReducer} from './reducers'
import promise from 'redux-promise-middleware';

const store = configureStore({
    reducer  :{
        films : filmsSliceReducer
    },
    middleware : [promise]
})
store.subscribe(() => {});

export default store;