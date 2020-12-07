import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const SignUpScreen = (props) => {
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: "#000" }}>
      <View style={styles.viewContainer}>
        <Text style={styles.txtTitle}>Create your account</Text>
        <View style={styles.viewEmailDesc}>
          <Text style={styles.txtDesc}>Sign up as </Text>
          <Text style={styles.txtEmail}>mehdiett7@gmail.com</Text>
        </View>
        <View style={styles.viewInputGroup}>
          <Text style={styles.txtInput}>First name</Text>
          <TextInput style={styles.inputItem} />
          <Text style={styles.txtInput}>Last name</Text>
          <TextInput style={styles.inputItem} />
          <Text style={styles.txtInput}>Create a password</Text>
          <TextInput style={styles.inputItem} />
        </View>
        <View style={styles.viewBtn}>
          <TouchableOpacity onPress={() => props.navigation.navigate('MainTab')}>
            <Text style={styles.txtBtnContinue} >Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signInContainer}>
          <TouchableOpacity>
            <Text style={styles.txtSignIn}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  txtTitle: {
    fontWeight: "900",
    fontSize: 24,
    marginBottom: 20,
  },
  viewEmailDesc: {
    flexDirection: "row",
  },
  txtDesc: {
    fontWeight: "100",
    color: "#F1F1F1",
    marginBottom: 5,
    fontSize: 16,
  },
  txtEmail: {
    fontWeight: "900",
    color: "#F1F1F1",
    marginBottom: 5,
    fontSize: 16,
  },
  viewInputGroup: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  inputItem: {
    width: 300,
    height: 47,
    backgroundColor: "#1C1C1C",
    padding: 10,
    color: "white",
    marginBottom: 20,
  },
  txtInput: {
    color: "grey",
    marginBottom: 10,
  },
  viewBtn: {
    width: 150,
    height: 47,
    backgroundColor: "#4e41a3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    borderRadius: 3,
  },
  txtBtnContinue: {
    fontSize: 18,
    fontWeight: "900",
  },
  signInContainer: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
  },
  txtSignIn: {
    color: "#C1C1C1",
  },
});
export default SignUpScreen;
