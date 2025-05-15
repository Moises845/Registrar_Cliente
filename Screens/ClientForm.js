import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { use, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

export default function ClientForm({ route, navigation }) {
  const { clientes, setClientes } = route.params;

  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [sexo, setSexo] = useState("");

  //funcion para guardar los clientes en una lista
  const guardar = () => {
    if (!cedula || !nombre) return null;

    const nuevoCliente = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellidos,
      fechaNacimiento: fechaNacimiento,
      sexo: sexo,
    };

    setClientes([nuevoCliente, ...clientes]);

    Alert.alert(
      "Datos almacenados",
      `
        Cedula: ${cedula}
        Nombre: ${nombre}
        Apellidos: ${apellidos}
        Fecha nacimiento: ${fechaNacimiento}
        Sexo: ${sexo}
        `
    );

    setCedula("");
    setNombre("");
    setApellidos("");
    setFechaNacimiento("");
    setSexo("");

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.encabezado}>Registrar Cliente</Text>
      <Text style={styles.label}>Cedula: </Text>
      <TextInput
        style={styles.input}
        value={cedula}
        onChangeText={setCedula}
        placeholder="ej: 355-111111-1000A"
      />

      <Text style={styles.label}>Nombres: </Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="ej: Jose Armando"
      />

      <Text style={styles.label}>Apellidos: </Text>
      <TextInput
        style={styles.input}
        value={apellidos}
        onChangeText={setApellidos}
        placeholder="ej: Perez Jimenez"
      />

      <Text style={styles.label}>Fecha de nacimiento: </Text>
      <TextInput
        style={styles.input}
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        placeholder="DD-MM-YYYY"
      />

      <Text style={styles.label}>Sexo: </Text>
      <View style={styles.pickerStyle}>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Femenino" value="Femenino" />
        </Picker>
      </View>
      <Button title="Guardar" onPress={guardar}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E6F7E6",
    alignItems: "center",
    justifyContent: "center",
  },
  encabezado: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
    width: 300,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
    width: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 8,
    marginTop: 5,
    borderRadius: 5,
    width: 300,
    height: 55,
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 30,
    marginTop: 5,
    marginBottom: 15,
    width: 300,
  },
});