import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function About({ navigation, route }) {

    const { nombre } = route.params
    
    return (
        <View style={styles.container}>
            <Text>Hello {nombre}!! - This is the about page</Text>
            <StatusBar style="auto" />
            <Button title="Go back"
                onPress={() => navigation.goBack()}
            //   onPress={() => navigation.navigate("Home")}
            //   onPress={() => navigation.push("Home")}
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
    },
});