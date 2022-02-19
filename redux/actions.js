import { createAction } from "@reduxjs/toolkit"
import { apiInstance } from "../axios/api"
import { createAsyncAction } from 'redux-promise-middleware-actions';



export const fetchfilms = createAsyncAction('TRENDING_FETCH', async  (trendingFilter) => {
    
    const response = await  apiInstance.get(`movies/${trendingFilter}`);
    if (response.status != 200)  return [];
    
    return response.data;
        
  });