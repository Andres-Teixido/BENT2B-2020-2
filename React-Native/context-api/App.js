import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GlobalContext from "./components/global/context";

import Home from "./components/pages/home";
import About from "./components/pages/about";



export default function App() {


  const [authData, setAuthData] = useState({
    nombre: "NT2",
    apellido: "ORT",
    mail: "nt2@ort.edu.ar",
    cambioNombre:(nombre) => {
      console.log(nombre);
      setAuthData({ ...authData, nombre: nombre})
    }
  })

  const Stack = createStackNavigator();

  return (

    // <GlobalContext.Provider value={authData}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />

        </Stack.Navigator>
      </NavigationContainer>
    // </GlobalContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
