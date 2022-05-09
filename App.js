import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/HomeScreen'
import AttendanceScreen from './src/Screen/AttendanceScreen';
import LeaveScreen from './src/Screen/LeaveScreen';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="Leave"  component={LeaveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;