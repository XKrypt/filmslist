import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchfilms } from './redux/actions';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from './src/tabs/home/home';
import { Search } from './src/tabs/search/search';
import { Genres } from './src/tabs/genres/genre';
import { AntDesign } from '@expo/vector-icons';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const BottomTab = createMaterialBottomTabNavigator();


export function AppRoot() {


    return (
        <NavigationContainer 
            theme={{
                ...DefaultTheme,
                colors: {
                    ...DefaultTheme.colors,
                    background: '#333333'
                }
            }}
        >
            <BottomTab.Navigator style={styles.bottomTabContainer} barStyle={styles.bottomTab}>

                {/* Home */}
                <BottomTab.Screen
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="home" size={24} color="white" />
                        )
                    }}
                    name="Home" component={Home} />

                {/* Search */}
                <BottomTab.Screen
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="search1" size={24} color="white" />
                        )
                    }}
                    name="Pesquisar"
                    component={Search} />

                {/* Genres */}
                <BottomTab.Screen
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="bars" size={24} color="white" />
                        )
                    }}
                    name="Gêneros" component={Genres} />

            </BottomTab.Navigator>
            <StatusBar style='light' />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomTabContainer: {
        backgroundColor: "#333333"
    },
    bottomTab: {
        backgroundColor: "#1C1C1C",
        borderRadius: 10,
        padding: 7,
        margin: 5
    }
});

