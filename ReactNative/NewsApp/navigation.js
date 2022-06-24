import Main from './components/Main';
import Contacts from './components/Contacts';
import FullInfo from './components/FullInfo';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="Main"
                component={Main}
                options={{title: "Главная"}}
            />
            <Stack.Screen 
                name="Contacts"
                component={Contacts}
                options={{title: "О нас"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}