import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Feeds = () => {
    return (
        <View style={style.screen}>
            <Text>Feeds Section</Text>
        </View>
    )
}

const style = StyleSheet.create({
    screen:{
        flex:1,
        marginTop:30,
    }
})

export default Feeds
