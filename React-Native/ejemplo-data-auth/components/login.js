import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const API_BASE_URL = `http://127.0.0.1:3333`

export default function Login({ applyAuthentication }) {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function login(){
        const headers = new Headers();

        headers.append("Content-type", "application/json")

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({email,password})
        }

        fetch(`${API_BASE_URL}/v1/auth/login`, requestOptions)
        .then(res => {
            console.log("Data antes de tratamiento: ", res)
            return res.json()
        }).then(data => {
            applyAuthentication(data);
        })
        .catch(err => {
            console.error("Error en la comunicacion: ", err)
        })
    }

    return (
        <View style={styles.container}>
            <Text>Pantalla LOGIN</Text>
            <StatusBar style="auto" />
            <TextInput
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
            />
            <TextInput
                value={password}
                placeholder="Password"
                keyboardType="visible-password"
                secureTextEntry={true}
                onChangeText={setPassword}
            />

            <Button
                title="Sign In"
                onPress={login}
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
