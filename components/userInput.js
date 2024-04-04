import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions, Text } from 'react-native';
import { faker } from '@faker-js/faker';
import { RadioButton } from 'react-native-paper';
import colorHash from '../utils/colorHash';
import TextAvatar from 'react-native-text-avatar';

const { width, height } = Dimensions.get('window');

const UserInput = ({ addUser }) => {
    const MIN = 7;
    const MAX = 120;

    const generateRandomUser = () => ({
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: String(MIN + Math.floor(Math.random() * (MAX - MIN + 1))),
        gender: faker.person.sexType()
    });


    const handleAddUser = () => {
        addUser(user);
        setUser(generateRandomUser());
    };

    const [user, setUser] = useState(generateRandomUser());

    return (
        <View style={styles.container}>
            <View style={styles.textAvatar}>
                <TextAvatar
                    backgroundColor={colorHash(user.firstName)}
                    textColor={'#0000ff'}
                    size={60}
                    type={'circle'}
                >{user.firstName}</TextAvatar>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={user.email}
                onChangeText={(text) => setUser({ ...user, email: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={user.firstName}
                onChangeText={(text) => setUser({ ...user, firstName: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={user.lastName}
                onChangeText={(text) => setUser({ ...user, lastName: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Age"
                value={user.age}

                onChangeText={(text) => setUser({ ...user, age: text })}
                keyboardType="numeric"
            />
            <Text>Gender:</Text>
            <View style={styles.radioContainer}>
                <RadioButton color={styles.radioButton.color}
                    value="male"

                    status={user.gender === 'male' ? 'checked' : 'unchecked'}
                    onPress={() => setUser({ ...user, gender: 'male' })}
                />
                <Text>Male</Text>
                <RadioButton
                    value="female"
                    color={styles.radioButton.color}
                    status={user.gender === 'female' ? 'checked' : 'unchecked'}
                    onPress={() => setUser({ ...user, gender: 'female' })}
                />
                <Text>Female</Text>
            </View>
            <View style={styles.radioContainer} />
            <View style={styles.button}>
                <Button title="Add User" onPress={handleAddUser} />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        paddingHorizontal: width * 0.15,
    },
    textAvatar: {
        padding: width * 0.05,
        alignSelf: 'center',
    },
    input: {
        height: height * 0.05,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: height * 0.02,
        paddingHorizontal: 7
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioButton: {
        color: '#0BB5FF'
    },
    button: {
        alignSelf: 'center',
        width: '50%'
    }

});

export default UserInput;
