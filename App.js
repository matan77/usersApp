import { StyleSheet, View } from 'react-native';
import UserInput from './components/userInput';
import { useState } from 'react';
import UsersList from './components/usersList';

export default function App() {
  [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  }

  return (  <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Users" component={UsersList} />
      <Tab.Screen name="Add" component={UserInput} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
