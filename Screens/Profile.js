import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Profile = () => {
    return (
        <View style={style.screen}>
            <Text>Profile</Text>
        </View>
    )
}

const style = StyleSheet.create({
    screen:{
        flex:1,
        marginTop:30,
    }
})

export default Profile
