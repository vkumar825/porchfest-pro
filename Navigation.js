import * as React from 'react';
import { Text, View,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Styles from './Styles.js';


const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>Home!</Text>
            <TouchableHighlight
                onPress={() => navigation.navigate('About')}
                activeOpacity={0.6}
                underlayColor='red'
            >
                <Text style={Styles.button}>Start App!</Text>
            </TouchableHighlight>

        </View>

    );
}
function AboutScreen() {
    return (
        <View style={{
            flex: 1, justifyContent: 'center', alignItems: 'center'
        }}>
            <Text>About!</Text>

        </View>
    );
}
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = 'Home'>
                <Stack.Screen name="Home"
                    component={HomeScreen} />
                    <Stack.Screen name="About"
                    component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}