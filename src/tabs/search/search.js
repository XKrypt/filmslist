import { View, Text, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { searchFilm } from '../../../redux/actions';
import { SafeAreaView } from 'react-native';
import { FlatListContainer, SearchView, SearchInput, FilmsListCards, NotFoundText, NotFoundView } from '../../components/styles';
import { FilmItem } from '../../components/film-item';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { ToastAndroid } from "react-native";

export function Search() {
    const dispatch = useDispatch();
    const filmsData = useSelector((state) => state.films);


    //Caso não encontre nenhum filme
    function NotFound() {
        return (
            <NotFoundView>
                {filmsData.isSearched ?
                    <>
                        <Entypo name="emoji-sad" size={36} color="white" />
                        <NotFoundText>Nenhum resultado encontrado</NotFoundText>
                    </>
                    :

                    <>
                        <AntDesign name="search1" size={36} color="white" />
                        <NotFoundText>Procure por um filme</NotFoundText>
                    </>}

            </NotFoundView>
        )
    }




    //Pesquisa os filmes assim que termina de editar
    function onEndEditing(e) {
        const input = e.nativeEvent.text;

        //Se estiver vazio
        if (input == "") {
            ToastAndroid.show("Para pesquisar é necessario digitar pelo menos um caractere", ToastAndroid.LONG);
            return
        }
        setRefresh(false);
        dispatch(searchFilm(e.nativeEvent.text))

    }


    return (
        <View>
            <SearchView>
                <SearchInput
                    onEndEditing={onEndEditing}
                    placeholder="Pesquisar"
                />
            </SearchView>


            <FlatListContainer>
                <SafeAreaView>
                    {

                        (filmsData.isPendingSearch && filmsData.isSearched) ?
                            //Mostra uma animação enquanto espera carregar os dados
                            <ActivityIndicator size="large" color="#FFF" /> 
                            :
                            //Se o array estiver vazio retorna uma mensagem dizendo que não foram encontrados filmes
                            (filmsData.filmsSearch.length > 0) ?
                                <FilmsListCards data={filmsData.filmsSearch}
                                    renderItem={(item) => <FilmItem filmTitle={item.item.movie?.title} />}
                                    keyExtractor={ item => item.key}
                                />
                                :
                                        <NotFound />
                            
                        }



                </SafeAreaView>
            </FlatListContainer>


        </View>
    )
}