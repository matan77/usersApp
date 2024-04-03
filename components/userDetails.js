import React from "react";
import { View, Text, StyleSheet, Button, Linking } from "react-native";
import TextAvatar from 'react-native-text-avatar';

export default function UserDetails({ navigation, route }) {
    const { user } = route.params;
    const handleEmailPress = () => {
        Linking.openURL(`mailto:${user.email}`);
    };
    return < View style={styles.container} >
        <View>
            <View style={styles.header}>
                <TextAvatar
                    backgroundColor={colorHash(user.firstName)}
                    textColor={'#0000ff'}
                    size={60}
                    type={'circle'}
                >{user.firstName}</TextAvatar>
                <Text style={styles.center}>{`${user.firstName} ${user.lastName}`}</Text>
            </View>
            <Text>
                Email: <Text style={styles.emailText} onPress={handleEmailPress}>{user.email}</Text>
            </Text>
            <Text>Age: {user.age}</Text>
            <Text>Gender: {user.gender}</Text>
        </View>
        <Button title="Back" onPress={() => {
            navigation.goBack()
        }
        } />
    </View >;

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    center: {
        marginLeft: 20
    },
    emailText: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
});