import { createSlice } from "@reduxjs/toolkit";
import { apiInstance } from "../axios/api";

const initialState = {
    isPending: true,
    films : null
}
const actionFetching = "TRENDING_FETCH_FETCHING"

const filmsSlice = createSlice({
    name : 'films',
    initialState,
    reducers : {
        TRENDING_FETCH : (state, action) => {
           return state;
        }
    },
    extraReducers: {
        // could use computed key syntax with a separate type constant
        TRENDING_FETCH_FETCHING : (state, action) => {
            
            return initialState;
        },
        // or the actual field name directly matching the type string
        TRENDING_FETCH_PENDING: (state, action) => {
            

            return initialState;
        },
        TRENDING_FETCH_FULFILLED: (state, action) => {
            

           return {
                isPending : false,
                films : action.payload
            }
        }
      }
});

export const {TRENDING_FETCH, TRENDING_FETCH_FULFILLED, TRENDING_FETCH_PENDING} = filmsSlice.actions;
export const filmsSliceReducer = filmsSlice.reducer;