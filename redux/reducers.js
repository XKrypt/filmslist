import { createSlice } from "@reduxjs/toolkit";
import { apiInstance } from "../axios/api";

const initialState = {
    isPending: true,
    isPendingSearch: true,
    isSearched: false,
    filmsData : [],
    filmsSearch : []
}


const filmsSlice = createSlice({
    name : 'films',
    initialState,
    reducers : {
        INITIAL_STATE : () => initialState,
        LOAD_FILMS_TRENDING : (state, action) => {
           return state;
        },
        LOAD_FILMS_FROM_SEARCH : (state, action) => {
           return state;
        }
    },
    extraReducers: {

        //funções responsaveis por carrregar os filmes por um filtro


        LOAD_FILMS_TRENDING_FETCHING : (state, action) => {
            
            
        },
      
        LOAD_FILMS_TRENDING_PENDING: (state, action) => {
            
            return {
                isPending : true,
                isPendingSearch : state.isPendingSearch,
                isSearched : state.isSearched,
                filmsData : state.filmsData,
                filmsSearch: state.filmsSearch
            }

            
        },

        LOAD_FILMS_TRENDING_FULFILLED: (state, action) => {
            

           return {
                isPending : false,
                isSearched : state.isSearched,
                isPendingSearch : state.isPendingSearch,
                filmsData : action.payload,
                filmsSearch : state.filmsSearch
            }
        },



        //Pesquisa de filmes
        LOAD_FILMS_FROM_SEARCH_PENDING: (state, action) => {


            return {
                isPending : state.isPending,
                isSearched : true,
                isPendingSearch : true,
                filmsData : state.filmsData,
                filmsSearch: action.payload
            }

        },

        LOAD_FILMS_FROM_SEARCH_FULFILLED: (state, action) => {
            
         
           return {
                isPending : state.isPending,
                isSearched : state.isSearched,
                isPendingSearch : false,
                filmsData : state.filmsData,
                filmsSearch: action.payload
            }
        }
      }
});

export const { LOAD_FILMS_FROM_SEARCH_FULFILLED, LOAD_FILMS_FROM_SEARCH_PENDING, LOAD_FILMS_TRENDING_FULFILLED, LOAD_FILMS_TRENDING_PENDING } = filmsSlice.actions
export const filmsSliceReducer = filmsSlice.reducer;