import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { AppRoot } from './AppRoot';
import store from './redux/store';


export default function App() {
  
  return (
    <Provider store={store} >
      <AppRoot />
    </Provider>
  );
}


