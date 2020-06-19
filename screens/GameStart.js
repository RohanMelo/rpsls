import React, { useContext } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

import Header from '../components/Header'
import { Context } from '../components/Store'

const GameStart = ({ navigation, route }) => {


    return (
        <View style={styles.container}>
            <Header />
            <ImageBackground source={require('../assets/backgroundstart.png')} style={styles.bgImage}>

                <View style={styles.rockWrapper}>

                    <TouchableOpacity onPress={() => navigation.navigate('End', {
                        playerSelected: 'rock'
                    })}>
                        <View style={styles.rock}></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.spockPaperWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('End', {
                        playerSelected: 'spock'
                    })}>
                        <View style={styles.spock}></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('End', {
                        playerSelected: 'paper'
                    })}>
                        <View style={styles.paper}></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.fillerView}></View>
                <View style={styles.lizardScissorsWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate('End', {
                        playerSelected: 'lizard'
                    })}>
                        <View style={styles.lizard}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('End', {
                        playerSelected: 'scissors'
                    })}>
                        <View style={styles.scissors}></View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Text style={styles.chooseText}>Choose One to Start!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262262'
    },
    bgImage: {
        maxWidth: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7,
        flexDirection: 'column',
        alignContent: 'stretch'

    },
    rock: {
        height: 130,
        width: 120,
        justifyContent: 'center',
        marginBottom: -10
    },
    spock: {
        height: 140,
        width: 120,

    },
    paper: {
        height: 140,
        width: 120,

    },
    lizard: {
        height: 120,
        width: 140,

    },
    scissors: {
        height: 120,
        width: 140,

    },
    rockWrapper: {
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.07
    },
    spockPaperWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    lizardScissorsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    fillerView: {
        height: Dimensions.get('window').height * 0.05,
    },
    chooseText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginTop: 5
    }

});

export default GameStart
