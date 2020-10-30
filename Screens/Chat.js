import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Chat = () => {
    return (
        <View style={style.screen}>
            <Text>Chat Section</Text>
        </View>
    )
}

const style = StyleSheet.create({
    screen:{
        marginTop:30,
        flex:1,

    }
})

export default Chat;
