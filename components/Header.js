import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';

// import { Context } from './Store'

const Header = (props) => {
    // const { store, dispatch } = useContext(Context)


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rock Paper Scissors Lizard Spock</Text>
            {/* <Text style={styles.score}>✊✋✌️🦎🖖</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262262'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginTop: 5
    },
    score: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',

        marginTop: 5
    },
})

export default Header
