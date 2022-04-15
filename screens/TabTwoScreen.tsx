import { StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { Text, View } from "../components/Themed";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";
import credit from "../redux/actions/credit";
import debit from "../redux/actions/debit";

export default function TabTwoScreen() {
  const [selectedValue, setSelectedValue] = useState("credit");
  const [debitType, setDebitType] = useState("irreversible");
  const [accountName, setAccountName] = useState("sbi");
  const [number, onChangeNumber] = useState(null);
  const dispatch = useDispatch();
  const onButtonPress = () => {
    selectedValue === "credit" &&
      dispatch(credit({ amount: number, bank: accountName }));
    selectedValue === "debit" &&
      dispatch(debit({ amount: number, bank: accountName }));
  };
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
        placeholder="Enter amount here"
        keyboardType="numeric"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        onPress={onButtonPress}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
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
  input: {
    color: "black",
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 5,
    width: "50%",
    padding: 10,
  },
});
