import { apiInstance } from "../axios/api"
import { createAsyncAction } from 'redux-promise-middleware-actions';


//Carrega os filmes baseado em um filtro
export const fetchfilms = createAsyncAction('LOAD_FILMS_TRENDING', async  (trendingFilter) => {
    
    const response = await  apiInstance.get(`movies/${trendingFilter}`);

    let films = response.data;

      //Coloca uma chave pra ser usada no FlatList
    for (let index = 0; index < films.length; index++) {
      
      films[index].key = index;
      
    }

    if (response.status != 200)  return [];
    
    return films;
        
  });


  //Procura por um filme baseado no input do usuario
export const searchFilm = createAsyncAction('LOAD_FILMS_FROM_SEARCH', async  (searchString) => {
    
    const response = await  apiInstance.get(`search/movie?query=${searchString}`);

    let films = response.data;
    //Coloca uma chave pra ser usada no FlatList
    for (let index = 0; index < films.length; index++) {

      films[index].key = index;
      
    }

    if (response.status != 200)  return [];
    
    return films;
        
  });