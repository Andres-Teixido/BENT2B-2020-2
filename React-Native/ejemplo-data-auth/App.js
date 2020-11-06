import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Login from "./components/login";

export default function App() {

  const [authenticated, setAuthenticated] = useState(false);


  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@app_token", JSON.stringify(value))
    } catch (error) {
      
    }
  }
  

  const getData = async (key) => {
    try {
      return JSON.parse(await AsyncStorage.getItem(key));
    } catch (error) {
      
    }
  }

  const deleteData= async (key) => {
    try {
      return await AsyncStorage.removeItem(key)
    } catch (error) {
      
    }
  }

  const clearAll= async () => {
    try {
      return await AsyncStorage.clear()
    } catch (error) {
      
    }
  }

  const checkToken = async () =>{
    const token = await getData("@app_token");
    console.log(token);
    if (token != undefined){
      
      setAuthenticated(true);
    }
  }



  function applyAuthentication({token}){
    console.log("Almacenar el token", token)
    storeData(token)
    checkToken();
  }

  function desloguear(){
    clearAll();
    setAuthenticated(false);
  }


  /** 
   * Use effect para buscar el token... 
  */
  useEffect(() => {
    checkToken()
  }, [])


  return (

    (authenticated) ? 

    <View style={styles.container}>
      <Text>Dashboard Principal</Text>
      <StatusBar style="auto" />
      <Button
        title="Sign out"
        onPress={desloguear}

       />
    </View>    
    :
    <Login
      applyAuthentication={applyAuthentication}
    />
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
