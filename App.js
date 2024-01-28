import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import PercentagePicker from "./components/PercentagePicker";

export default function App() {
  const [price, setPrice] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const resetEverything = () => {
    setPercentage("10");
    setPrice(0);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>TipMeWell</Text>
      {/* ///////////////////////////////////////////////////////////////////////////////  */}
      <Text style={styles.smallTitle}>Price</Text>
      <View style={styles.priceInput}>
        <TextInput
          placeholder="input price"
          onChangeText={setPrice}
        ></TextInput>
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////  */}
      <Text style={styles.smallTitle}>Percentage</Text>
      <View style={styles.percentageInput}>
        <PercentagePicker value={"10"} onSet={setPercentage} />
      </View>
      {/* ///////////////////////////////////////////////////////////////////////////////  */}
      <Text style={styles.smallTitle}>Total</Text>
      <View style={styles.percentageOutput}>
        <TouchableOpacity style={styles.result}>
          <Text>
            {(Number(price) + Number(price * (percentage / 100))).toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.reset} onPress={resetEverything}>
        <Text>RESET</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  priceInput: {
    width: "90%",
    margin: 10,
    padding: 20,
    backgroundColor: "#cfc",
    borderRadius: 10,
  },
  percentageInput: {
    width: "90%",
    margin: 10,
    padding: 10,
    backgroundColor: "#ccf",
    borderRadius: 10,
  },
  percentageOutput: {
    width: "90%",
    margin: 10,
    padding: 25,
    backgroundColor: "#fcc",
    borderRadius: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 30,
  },
  reset: {
    backgroundColor: "grey",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});
