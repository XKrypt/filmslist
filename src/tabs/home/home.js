import { useEffect } from "react";
import { View, Text } from "react-native";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchfilms } from "../../../redux/actions";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeView, TrendingButton, Trendings, TrendingButtonTitle, FilmCard, FlatListContainer, FilmImage, FilmTitle } from "./styles";
import { useState } from "react";
import { trendingFilters } from "../../../axios/api";


export function Home() {
    const dataTest = useSelector((state) => state.films)
    const dispatch = useDispatch();

    const [filters, setFilters] = useState({
        trending: true,
        popular: false,
        mostWatched: false

    });

    function resetFilters() {
        let copyFilters = filters;
        for (let el in copyFilters) {
            copyFilters[el] = false;
        }
        setFilters(copyFilters);
    }

    //Muda a cor dos filtros da home, assim o usuario sabe qual o selecionado
    function changeActiveFilter(filter) {

        resetFilters();
        let copyFilters = { ...filters };

        copyFilters[filter] = true;

        setFilters(copyFilters);
        loadTrending(filter);
    }

    function loadTrending(filter) {
        dispatch(fetchfilms(trendingFilters[filter]))
    }

    useEffect(() => {
        dispatch(fetchfilms(trendingFilters.trending))
        console.log(dataTest.filmsData)
    }, [])

    return (
        <HomeView>

            {/* Filtros  */}
            <Trendings>
                <TrendingButton onPress={() => changeActiveFilter("trending")} active={filters.trending}>
                    <TrendingButtonTitle  >Em alta</TrendingButtonTitle>
                </TrendingButton>

                <TrendingButton onPress={() => changeActiveFilter("popular")} active={filters.popular}>
                    <TrendingButtonTitle>Populares </TrendingButtonTitle>
                </TrendingButton>

                <TrendingButton onPress={() => changeActiveFilter("mostWatched")} active={filters.mostWatched}>
                    <TrendingButtonTitle>Mais Assistidos</TrendingButtonTitle>
                </TrendingButton>


            </Trendings>


            {/* Lista de filmes */}
            <FlatListContainer>
                <SafeAreaView>


                    {/*
                
                Os filmes populares tem uma estrutura diferente,
                então se filter.popular == true, ele muda como deve chamar
                a propriedade.
                
                */}
                    <FlatList

                        bounces={false}
                        data={dataTest.filmsData}

                        renderItem={(item) => {
                            return (
                                <FilmCard>
                                    <FilmImage>
                                        <MaterialCommunityIcons name="film" size={72} color="white" />
                                    </FilmImage>
                                    <FilmTitle>{

                                        //Os filmes populares não tem a propriedade movie
                                        filters.popular ?
                                            item.item.title :
                                            item.item.movie.title
                                    }

                                    </FilmTitle>
                                </FilmCard>
                            )
                        }}

                        keyExtractor={
                            item =>
                                filters.popular ?
                                    item.tmdb :
                                    item.movie.tmdb
                        }

                    />



                </SafeAreaView>
            </FlatListContainer>
        </HomeView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});