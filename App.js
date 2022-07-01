import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import DetailGrid from './src/components/DetailGrid';
import CategoryScreen from './src/screens/CategoryScreen';
import ProductScreen from './src/screens/ProductScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen name="Category" component={CategoryScreen}/>
        <Stack.Screen name="Product" component={ProductScreen}/>
        <Stack.Screen name='Details' component={DetailGrid}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  
})

export default App
