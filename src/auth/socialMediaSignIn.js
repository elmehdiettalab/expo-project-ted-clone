import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const SocialMediaSignIn = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.txtTitle}>Sign in to TED</Text>
        <Text style={styles.txtDesc}>
          Get a personalized TED experience across all
        </Text>
        <Text style={styles.txtDesc}>your devices, from Web to apps to TV</Text>

        <View style={styles.groupBtns}>
          <TouchableOpacity style={styles.SMBtnLayout}>
            <View style={styles.iconView}>
              <FontAwesome name="apple" size={30} color="black" />
            </View>
            <Text style={styles.txtSMBtn}>Continue with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SMBtnLayout}>
            <View style={styles.iconView}>
              <Image
                style={styles.imgLogoG}
                source={require("../../assets/google.png")}
              />
            </View>
            <Text style={styles.txtSMBtn}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SMBtnLayout}>
            <View style={styles.iconViewFB}>
              <FontAwesome name="facebook" size={30} color="white" />
            </View>
            <Text style={styles.txtSMBtn}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewEmail}>
          <Text style={styles.txtUseEmail}>Or use your email</Text>
          <Text style={styles.txtEmail}>Email address</Text>
          <TextInput style={styles.inputEmail} />
          <TouchableOpacity style={styles.btnContinue} onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.txtContinue}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signInContainer}>
          <TouchableOpacity>
            <Text style={styles.txtSignIn}>Skip this for now</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  txtTitle: {
    fontWeight: "900",
    fontSize: 24,
    marginBottom: 20,
  },
  txtDesc: {
    fontWeight: "400",
    color: "#F1F1F1",
    marginBottom: 5,
    fontSize: 16,
  },
  groupBtns: {
    marginTop: 30,
  },
  SMBtnLayout: {
    backgroundColor: "#FFF",
    width: 300,
    height: 47,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
  },
  txtSMBtn: {
    color: "#000",
    fontWeight: "900",
    width: 253,
    textAlign: "center",
  },
  iconView: {
    width: 47,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    // paddingLeft: 5,
  },
  iconViewFB: {
    width: 47,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#3B5998',
    borderTopStartRadius: 3,
    borderBottomStartRadius: 3
  },
  imgLogoG: {
    width: 27,
    height: 27,
  },
  viewEmail: {
    marginTop: 30, 
    justifyContent: 'center',
    alignItems:'center'
  },
  txtUseEmail: {
    fontSize: 24,
    marginBottom: 20
  }, 
  txtEmail: {
    color: 'grey',
    marginBottom: 10
  }, 
  inputEmail: {
    width: 300,
    height: 47,
    backgroundColor: '#1C1C1C', 
    padding: 10, 
    color: 'white'
  }, 
  btnContinue: {
    marginTop: 20, 
    width: 300,
    height: 47, 
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#4e41a3', 
    borderRadius: 3
  }, 
  txtContinue: {
    fontSize: 18,
    fontWeight: '900'
  },
  signInContainer: {
    position: 'absolute', 
    bottom:40,
    flexDirection: 'row'
  },
  txtSignIn: {
    color: "#C1C1C1",
    
  },
});
export default SocialMediaSignIn;
