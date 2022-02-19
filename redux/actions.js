import { createAction } from "@reduxjs/toolkit"
import { apiInstance } from "../axios/api"
import { createAsyncAction } from 'redux-promise-middleware-actions';



export const fetchfilms = createAsyncAction('TRENDING_FETCH', async  () => {
    
    const response = await  apiInstance.get("movies/trending");
    if (response.status != 200)  return [];
    
    return response.data;
        
  });