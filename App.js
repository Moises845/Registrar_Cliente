import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

import React, { use, useState } from "react";

import Navigation from "./Navigation";

export default function App() {
  return <Navigation></Navigation>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
