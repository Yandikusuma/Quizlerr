import React from 'react'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './screens/home';
import Category from './screens/category';
import MathQuestion from './question/mathQuestion';
import Result from './screens/result';
import QuizMath from './question/quizMath';


const theme ={
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}

const Stack = createStackNavigator()

const App = () => {
  
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Category" component={Category}/>
        <Stack.Screen name="MathQuestion" component={MathQuestion}/>
        <Stack.Screen name="Result" component={Result}/>
        <Stack.Screen name="QuizMath" component={QuizMath}/>


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App