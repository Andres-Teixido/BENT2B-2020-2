import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// import GlobalContext from "../global/context";

import { AuthData, reducer } from "../../services/global";

export default function Home({ navigation }) {

    // const context = useContext(GlobalContext);

    const [state, dispatch] = useReducer(reducer, AuthData)

    // Ejemplo con context
    // const [nombre, setNombre] = useState(context.nombre)

    // Ejemplo con reducer
    const [nombre, setNombre] = useState(state.nombre)

    useEffect(() => {
        // console.log("Aqui muestro la información de mi contexto (HOME): ", context)
        console.log("Aqui muestro la información de mi estado (HOME): ", state)
    }, [])

    function cambioNombre() {
        // Ejemplo con context
        // context.cambioNombre(nombre)

        // Ejemplo con reducer
        dispatch({type: 'CHANGE_NAME', nombre})
    }

    

    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <StatusBar style="auto" />
            {/* Ejemplo con context */}
            {/* <Text> Nombre: {context.nombre}</Text>
            <Text> Apellido: {context.apellido}</Text>
            <Text> Email: {context.mail}</Text> */}
            
            
            {/* Ejemplo con Reducer */}
            <Text> Nombre: {state.nombre}</Text>
            <Text> Apellido: {state.apellido}</Text>
            <Text> Email: {state.mail}</Text>

            <TextInput
                value={nombre}
                onChangeText={setNombre}
                placeholder={"Nombre"}
            />

            <Button
                title={"Actualiza Nombre"}
                onPress={cambioNombre}
            />
            <Button
                title={"Go to about"}
                onPress={() => navigation.navigate("About")}
            />



            {/* <GlobalContext.Consumer>
          {
              context => (
                  <View>
                      <Text>{context.nombre} - {context.apellido }</Text>
                  </View>
              )
          }
      </GlobalContext.Consumer> */}


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
