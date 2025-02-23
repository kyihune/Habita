import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function LoginPage()
{
    return(

        <View style={styles.container}>
            <Text style={styles.title}> Welcome to Habita </Text>

            <Image source= {require("../../assets/images/backgrounds/login_page_image.png")} style={styles.image}/>

            <TouchableOpacity style={styles.button} onPress={()=> console.log("Login Pressed")}>

                <Text style={styles.buttonText}> Login </Text>

            </TouchableOpacity>

            <Text style={styles.text}> Don't have an account? {" "}

                    <Text style={styles.signUpText} onPress={()=> console.log("Sign Up Pressed")}>Sign Up</Text>

            </Text>

        </View>

    );

}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcf9f4'
    },

    image :{
        width: 359,
        height: 363,
        resizeMode: 'contain'
    },

    title: {
        color: 'black',
        fontSize: 36,
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 10
    },

    text: {
        color: 'black',
        fontSize : 16,
        fontFamily : 'Inter_400Regular'
    },

    button: {
        backgroundColor: '#0095ff',
        shadowColor: '#87ceeb',
        shadowOpacity: 0.9,
        shadowOffset: {width:0, height: -4},
        shadowRadius: 8,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 240,
        height: 70,
        marginTop: 75,
        marginBottom: 10,
    },

    buttonText: {
        color: 'white',
        fontSize : 16,
        fontFamily : 'Inter_400Regular'
    },

    signUpText: {
        color: '#0095ff',
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
    }

})
