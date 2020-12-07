import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LandingAuthSreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Text style={styles.welcomeTxt}>Welcome to </Text>
          <Text style={styles.tedTitle}>TED</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>Answer two quick questions to</Text>
          <Text>get started</Text>
        </View>

        <View style={{ margin: 50 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("Qst1")}
          >
            <Text style={styles.txtBtn}>Let's go!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.txtSignIn}>Already have a TED account?</Text>
          <TouchableOpacity>
            <Text style={styles.txtSignIn}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position : 'relative', 
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeTxt: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: 28,
    fontWeight: "100",
  },
  tedTitle: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: 28,
    fontWeight: "900",
  },
  btn: {
    width: 140,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e62B1e",
  },
  signInContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row'
  },
  txtSignIn: {
    color: "#C1C1C1",
    
  },
});

export default LandingAuthSreen;
