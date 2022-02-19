import { fetchfilms } from "../redux/actions";
import { TRENDING_FETCH, TRENDING_FETCH_FULFILLED, TRENDING_FETCH_PENDING } from "../redux/reducers";
import store from '../redux/store';

describe("Testes API : ", () => {
    test('Requisitar filmes em alta (trending) deve retornar um array.', () => {

        store.dispatch(fetchfilms()).then((data) => {

            expect(Array.isArray(data)).toEqual(true);

        }).catch((erro) => { })
    })

    describe('Chamada das funções que gerenciam as requisições assíncronas.', () => {
        
        test('TRENDING_FETCH', () => {
            store.dispatch(fetchfilms()).then((data) => {

                expect(TRENDING_FETCH).toBeCalled();
    
            }).catch((erro) => { })
        })

        test('TRENDING_FETCH_FULFILLED', () => {
            store.dispatch(fetchfilms()).then((data) => {

                expect(TRENDING_FETCH_FULFILLED).toBeCalled();
    
            }).catch((erro) => { })
        })

        test('TRENDING_FETCH_PENDING', () => {
            store.dispatch(fetchfilms()).then((data) => {

                expect(TRENDING_FETCH_PENDING).toBeCalled();
    
            }).catch((erro) => { })
        })
    })
})