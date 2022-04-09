import { StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import { Text, View } from "../components/Themed";
import { Picker } from "@react-native-picker/picker";

export default function TabTwoScreen() {
  const [selectedValue, setSelectedValue] = useState("credit");
  const [debitType, setDebitType] = useState("irreversible");
  const [accountName, setAccountName] = useState("sbi");
  const [number, onChangeNumber] = useState(null);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200, color: "gray" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Credit" value="credit" />
        <Picker.Item label="Debit" value="debit" />
      </Picker>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {selectedValue === "debit" && (
        <Picker
          selectedValue={debitType}
          style={{ height: 50, width: 200, color: "gray" }}
          onValueChange={(itemValue, itemIndex) => setDebitType(itemValue)}
        >
          <Picker.Item label="Reversible" value="reversible" />
          <Picker.Item label="Irreversible" value="irreversible" />
        </Picker>
      )}
      {selectedValue === "debit" && (
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      )}
      <Picker
        selectedValue={accountName}
        style={{ height: 50, width: 200, color: "gray" }}
        onValueChange={(itemValue, itemIndex) => setAccountName(itemValue)}
      >
        <Picker.Item label="SBI" value="sbi" />
        <Picker.Item label="ICICI" value="icici" />
      </Picker>
      <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />

<TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
