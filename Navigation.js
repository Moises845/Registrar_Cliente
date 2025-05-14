import { View, Text } from "react-native";
import React, { use, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ClientForm from "./Screens/ClientForm";
import ListarClientes from "./Screens/ListarClientes";

const loginStacNavigator = createStackNavigator();

function MyStack() {
  return (
    <loginStacNavigator.Navigator initialRouteName="ListarClientes">
      <loginStacNavigator.Screen
        name="ListarClientes"
        component={ListarClientes}
      ></loginStacNavigator.Screen>
      <loginStacNavigator.Screen
        name="Formulario"
        component={ClientForm}
      ></loginStacNavigator.Screen>
    </loginStacNavigator.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}