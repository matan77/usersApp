import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TextAvatar from 'react-native-text-avatar';

export default function UserItem({ email, firstName, lastName, onUserSelect }) {

    return (
        <TouchableOpacity style={styles.button} onPress={onUserSelect}>
            <View style={styles.container} >
                <TextAvatar
                    backgroundColor={colorHash(firstName)}
                    textColor={'#0000ff'}
                    size={60}
                    type={'circle'}
                >{firstName}</TextAvatar>
                <Text>{`${firstName} ${lastName}`}</Text>
                <Text>Email: {email}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,

    },
});
