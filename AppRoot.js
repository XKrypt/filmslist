import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';
import { apiInstance } from './axios/api';
import { fetchfilms } from './redux/actions';
import { TRENDING_FETCH } from './redux/reducers';

export function AppRoot() {
    const films = useSelector(state => state.films);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchfilms());
    },[]);

    return (
        <View style={styles.container}>
            <Text>Filmes : {films.films?.length} </Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

