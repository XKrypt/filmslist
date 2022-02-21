import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
export const HomeView = styled.View`
    background-color: #333333;
    flex: 2;
    flex-direction: column;
`

export const Trendings = styled.View`
    margin-top: 45px;
    margin-bottom: 5px;
    flex: 3;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;   
`

export const TrendingButton = styled.TouchableOpacity`
    background-color: ${props => props.active ? "#94090D" : "#5C0002" };
    border-radius: 15px;
    height: 30px;
    width: 120px;
    justify-content: center;

`
export const TrendingButtonTitle = styled.Text`
    text-align: center;
    color: #FFF;
`

export const FlatListContainer = styled.View`
    
    height: 88%;
    justify-content: center;
`
export const FilmImage = styled.View`
    width: 150px;
    height: 250px;
    margin: auto;
    background-color: #4D4D4D ;
    justify-content: center;
    align-items: center;
`

export const FilmTitle = styled.Text`
    text-align: center;
    color: #FFF;
    padding: 15px;
`

export const FilmCard = styled.View`
    border-radius: 0px;
    justify-content: center;
    padding: 15px;
    margin: 5px 10px;
`

export const FilmsListCards = styled.FlatList`
        flex-direction: column;
`


export const NotFoundView = styled.View`
        height : 88%;
        justify-content: center;
        align-items: center;
`   

export const NotFoundText = styled.Text`
    text-align: center;
    color: white;
  `


export const SearchView = styled.View`
    margin-top: ${StatusBar.currentHeight + 15}px;
    width: 100%;
    height: 50px;
    justify-content: center;
`

export const SearchInput = styled.TextInput`
    background-color: #FFF;
    border-radius: 50px;
    height: 45px;
    padding: 10px;
    margin: 0px 7px;
`