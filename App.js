
import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Searchscreen from "./src/Screens/SearchScreen";
import Homescreen from "./src/Screens/HomeScreen";
import Idshowscreen from "./src/Screens/IdShowScreen";

const Stack = createNativeStackNavigator();



export default function App() {

return (

<NavigationContainer>

<Stack.Navigator initialRouteName="Home">

<Stack.Screen name="Home" 
component={Homescreen}
options={{
    title:'Home',
    headerStyle:{
      backgroundColor:"#6FB1CD",
    },
    headerTintColor:"blue",
    headerTintStyle: {
      fontWeight:'bold',

    },

}}
 />
 <Stack.Screen name="Search" 
 component={Searchscreen}
 options={{
  title:'Your List',
  headerStyle:{
    backgroundColor:"#6FB1CD",
  },
  headerTintColor:"blue",
  headerTintStyle: {
    fontWeight:'bold',

  },

}}
  />

<Stack.Screen name="IdScreen" 
 component={Idshowscreen}
 options={{
  title:'Your choice',
  headerStyle:{
    backgroundColor:"#6FB1CD",
  },
  headerTintColor:"blue",
  headerTintStyle: {
    fontWeight:'bold',

  },

}}
  />

</Stack.Navigator>

</NavigationContainer>

);

}