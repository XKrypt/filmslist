import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchfilms } from "../../../redux/actions";
import {
    HomeView,
    TrendingButton,
    Trendings,
    TrendingButtonTitle,
    FlatListContainer,
    FilmsListCards
} from '../../components/styles';
import { useState } from "react";
import { trendingFilters } from "../../../axios/api";
import { FilmItem } from "../../components/film-item";
import { ActivityIndicator } from "react-native";


export function Home() {
    const filmsData = useSelector((state) => state.films)
    const dispatch = useDispatch();

    const [filters, setFilters] = useState({
        trending: true,
        popular: false,
        mostWatched: false

    });


    const [currentFilter, setCurrentFilter] = useState(trendingFilters.trending);

    function resetFilters() {
        let copyFilters = filters;
        for (let el in copyFilters) {
            copyFilters[el] = false;
        }
        setFilters(copyFilters);
    }

    //Muda a cor dos filtros da home, assim o usuario sabe qual o selecionado
    function changeActiveFilter(filter) {

        //Reseta todos so filtros para false 
        resetFilters();

        let copyFilters = { ...filters };

        copyFilters[filter] = true;

        setFilters(copyFilters);
        setCurrentFilter(filter);
        loadFilms(filter);
    }

    function loadFilms(filter) {
        
        dispatch(fetchfilms(trendingFilters[filter]))
    }

    useEffect(() => {
        
        dispatch(fetchfilms(trendingFilters[currentFilter]))
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
                {
                    filmsData.pending ? 
                    <ActivityIndicator size="large"  color="#FFF"/>
                    :
                    <FilmsListCards

                        bounces={false}
                        data={filmsData.filmsData}

                        renderItem={(item) => (<FilmItem filmTitle={

                            //Os filmes populares não tem a propriedade movie
                            filters.popular ?
                                item.item.title :
                                item.item.movie?.title
                                
                        } />)}

                        keyExtractor={
                            item => item.key
                        }

                    />
                }
                    



                </SafeAreaView>
            </FlatListContainer>
        </HomeView>
    )
}
