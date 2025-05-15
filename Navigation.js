import { View, Text } from "react-native";
import React, { use, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ClientForm from "./Screens/ClientForm";
import ListarClientes from "./Screens/ListarClientes";

const loginStacNavigator = createStackNavigator();

function MyStack() {
  return (
    <loginStacNavigator.Navigator initialRouteName="Lista de Clientes">
      <loginStacNavigator.Screen
        name="Lista de Clientes"
        component={ListarClientes}
        options={{ headerShown: false }}
      ></loginStacNavigator.Screen>
      <loginStacNavigator.Screen
        name="Registrar Cliente"
        component={ClientForm}
        options={{ headerShown: false }}
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