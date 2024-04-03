import UserInput from './components/userInput';
import { useState } from 'react';
import UsersStack from './components/usersStack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function App() {
  [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }


  return (<NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Users"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ),
        }}>
        {() => <UsersStack users={users} />}
      </Tab.Screen>
      <Tab.Screen name="Add User"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-plus" color={color} size={size} />
          ),
        }}
      >
        {(navigation) => <UserInput addUser={addUser} />}
      </Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
  );
}