import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Dimensions} from 'react-native';
import { faker } from '@faker-js/faker';

const { width, height } = Dimensions.get('window');

const UserInput = ({ addUser }) => {
    const MIN = 7;
    const MAX = 120;

    const generateRandomUser = () => ({
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: String(MIN + Math.floor(Math.random() * (MAX - MIN + 1))),
        sexType: faker.person.sexType()
    });

    const handleAddUser = () => {
        addUser(user);
        setUser(generateRandomUser());
    };

    const [user, setUser] = useState(generateRandomUser());

    return (
        <View style={styles.container}>
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
            <TextInput
                style={styles.input}
                placeholder="Sex Type"
                value={user.sexType}
                onChangeText={(text) => setUser({ ...user, sexType: text })}
            />
            <Button title="Add User" onPress={handleAddUser} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: width * 0.05,
    },
    input: {
        height: height * 0.05,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.02,
    },
});

export default UserInput;
