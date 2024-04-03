import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDetails from "./userDetails";
import UsersList from "./usersList";
import { fa } from "@faker-js/faker";

const Stack = createNativeStackNavigator();


export default function UsersStack({ users }) {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="users">
            {(navigation) => <UsersList navigation={navigation} users={users} />}
        </Stack.Screen>
        <Stack.Screen name="userDetails" component={UserDetails} />
    </Stack.Navigator >
}