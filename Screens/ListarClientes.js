import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { use, useState } from "react";

import { useNavigation } from "@react-navigation/native";

export default function ListarClientes() {
  const [clientes, setClientes] = useState([]);

  const deleteItemByIndex = (index) => {
    setClientes((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de clientes</Text>
      <TouchableOpacity
        style={styles.navigateButton}
        onPress={() =>
          navigation.navigate("Formulario", { clientes, setClientes })
        }
      >
        <Text style={styles.buttonText}>Ir a Guardar Cliente</Text>
      </TouchableOpacity>

      {clientes.length === 0 ? (
        <Text style={styles.mensaje}>No hay clientes registrados</Text>
      ) : (
        <ScrollView style={styles.lista}>
          {clientes.map((i, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.label}>
                Cedula: <Text>{i.cedula}</Text>
              </Text>
              <Text style={styles.label}>
                Nombre: <Text>{i.nombre}</Text>
              </Text>
              <Text style={styles.label}>
                Apellidos: <Text>{i.apellidos}</Text>
              </Text>
              <Text style={styles.label}>
                Fecha de nacimiento: <Text>{i.fechaNacimiento}</Text>
              </Text>
              <Text style={styles.label}>
                Sexo: <Text>{i.sexo}</Text>
              </Text>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteItemByIndex(index)}
              >
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20,
    textAlign: "center",
  },
  mensaje: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 40,
  },
  lista: {
    flex: 1,
  },
  card: {
    backgroundColor: "#C8E6C9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontWeight: "bold",
    color: "#1B55E20",
    fontSize: 16,
  },
  valor: {
    fontSize: 16,
    marginBottom: 6,
    color: "2E7D32",
    fontWeight: "400",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  navigateButton: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});