import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

import UserItem from "./userItem";


export default function UsersList({ navigation, users }) {
    const onUserSelect = (i) => {
        navigation.navigation.navigate('userDetails', {
            user: users[i]
        });

    }

    return (
        <ScrollView>
            {users && users.length > 0 ? (
                users.map((user, i) => (
                    <UserItem key={i} {...user} onUserSelect={() => onUserSelect(i)} />
                ))
            ) : (
                <View style={styles.container}>
                    <Text style={styles.text}>No users</Text>
                </View>
            )}
        </ScrollView>
    );
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        height: height,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center'
    }
});
