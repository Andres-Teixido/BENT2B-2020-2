import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import GlobalContext from "../global/context";

export default function About() {
    const context = useContext(GlobalContext);

    useEffect(() => {
        console.log("Aqui muestro la información de mi contexto (ABOUT): ", context)
    }, [])


    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <StatusBar style="auto" />
            <Text> Nombre: {context.nombre}</Text>
            <Text> Apellido: {context.apellido}</Text>
            <Text> Email: {context.mail}</Text>          


        </View>
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
