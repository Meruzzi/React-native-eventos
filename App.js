import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from './src/pages/Inicio'
import Eventos from './src/pages/Eventos'
import Detalhes from './src/pages/Detalhes.jsx'
import Voos from './src/pages/Voos'
import Fotos from './src/pages/Camera'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function EventosBottomNavigation({ route }) {
  const {evento} = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Detalhes" component={Detalhes} initialParams={{evento: evento}} options={{headerShown: false}} />
      <Tab.Screen name="Voos" component={Voos} options={{headerShown: false}} initialParams={{evento: evento}} />
      <Tab.Screen name="Camera" component={Fotos} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

function EventosStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Eventos Disponíveis" options={{headerShown: false}} component={Eventos} />
      <Stack.Screen name="Tab" component={EventosBottomNavigation} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Eventos" component={EventosStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

