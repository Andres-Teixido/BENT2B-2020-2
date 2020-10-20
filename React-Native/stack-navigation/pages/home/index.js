import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Home({ navigation }) {

    const [nombre, setNombre ] = useState("")

    return (
        <View style={styles.container}>
            <Text>This is Home!</Text>
            <StatusBar style="auto" />

            <TextInput
                value={nombre}
                onChangeText={setNombre}
                placeholder="Quien sos?"
            />

            <Button
                title="go to About page"
                // onPress={() => {navigation.navigate("About")}} 
                onPress={() => {
                    // navigation.navigate("About", {nombre})
                    navigation.navigate("About", {
                        nombre: nombre
                    })
                }} 
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
});