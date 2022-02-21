import { trendingFilters } from "../axios/api";
import { fetchfilms, searchFilm } from "../redux/actions";
import { TRENDING_FETCH, TRENDING_FETCH_FULFILLED, TRENDING_FETCH_PENDING } from "../redux/reducers";
import store from '../redux/store';

describe("Testes API : ", () => {

    describe('Requisição de dados.', () => {
        test('Requisitar filmes em alta (trending) deve retornar um array.', () => {

            store.dispatch(fetchfilms()).then((data) => {

                expect(Array.isArray(data)).toEqual(true);

            }).catch((erro) => { })
        })

        test('Requisitar Filmes baseados em um input do usuario, deve retornar um array.', () => {

            store.dispatch(fetchfilms()).then((data) => {

                expect(Array.isArray(data)).toEqual(true);

            }).catch((erro) => { })
        })
    })

    describe('Chamada das funções que gerenciam as requisições assíncronas.', () => {

        describe('Carregamento dos filmes por um filtro', () => {
            test('LOAD_FILMS_TRENDING', () => {
                store.dispatch(fetchfilms(trendingFilters.trending)).then((data) => {

                    expect(LOAD_FILMS_TRENDING).toBeCalled();

                }).catch((erro) => { })
            })

            test('LOAD_FILMS_TRENDING_FULFILLED', () => {
                store.dispatch(fetchfilms(trendingFilters.trending)).then((data) => {

                    expect(LOAD_FILMS_TRENDING_FULFILLED).toBeCalled();

                }).catch((erro) => { })
            })

            test('LOAD_FILMS_TRENDING_PENDING', () => {
                store.dispatch(fetchfilms(trendingFilters.trending)).then((data) => {

                    expect(LOAD_FILMS_TRENDING_PENDING).toBeCalled();

                }).catch((erro) => { })
            })
        })


        describe('Carregamento dos filmes por uma pesquisa', () => {
            
            test('LOAD_FILMS_FROM_SEARCH', () => {
                store.dispatch(searchFilm("Kingsman")).then((data) => {

                    expect(LOAD_FILMS_FROM_SEARCH).toBeCalled();

                }).catch((erro) => { })
            })

            test('LOAD_FILMS_FROM_SEARCH_FULFILLED', () => {
                store.dispatch(searchFilm(trendingFilters.trending)).then((data) => {

                    expect(LOAD_FILMS_FROM_SEARCH_FULFILLED).toBeCalled();

                }).catch((erro) => { })
            })

            test('LOAD_FILMS_FROM_SEARCH_PENDING', () => {
                store.dispatch(searchFilm(trendingFilters.trending)).then((data) => {

                    expect(LOAD_FILMS_FROM_SEARCH_PENDING).toBeCalled();

                }).catch((erro) => { })
            })
        })
    })
})