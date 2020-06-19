import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { computerSelect, selectIcon, determineWinner } from '../utils/GameLogic'
import Header from '../components/Header'
// import { Context } from '../components/Store'


const GameEnd = ({ navigation, route }) => {


    // const { store, dispatch } = useContext(Context)
    const { playerSelected } = route.params
    const computerSelected = computerSelect()

    const playerIcon = selectIcon(playerSelected)
    const computerIcon = selectIcon(computerSelected)

    const winnerMessage = determineWinner(playerSelected, computerSelected)


    // useEffect(() => {

    //     if (winnerMessage.startsWith('Victory')) {
    //         dispatch({ type: "increment" })
    //     } else if (winnerMessage.startsWith('Tie')) {

    //     } else {
    //         dispatch({ type: "decrement" })
    //     }
    // })


    return (
        <View style={styles.container}>

            <Header />
            <View style={styles.iconContainer}>
                <Text style={styles.chooseText}>You have chosen:</Text>
                <Image source={playerIcon} style={styles.iconStyle} />
            </View>
            <View style={styles.iconContainer}>
                <Text style={styles.chooseText}>Sheldon has chosen:</Text>
                <Image source={computerIcon} style={styles.iconStyle} />
            </View>
            <View style={styles.messageContainer}>
                <Text style={styles.winnerText}>{winnerMessage.toUpperCase()}!</Text>
            </View>
            <View style={styles.playAgainContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Start')}><Text style={styles.chooseText}>Play Again</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262262',

    },
    chooseText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        marginTop: 5,
        marginBottom: 5
    },
    iconContainer: {
        alignItems: 'center',
        marginTop: 28
    },
    iconStyle: {

    },
    playAgainContainer: {
        backgroundColor: 'darkslateblue',
        marginTop: 20,
        padding: 16
    },
    messageContainer: {
        marginTop: 14
    },
    winnerText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'darkorange',
        marginTop: 10,
        marginBottom: 10
    }
});

export default GameEnd
