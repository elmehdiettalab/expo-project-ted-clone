import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Question2Screen = (props) => {
  const [btn1, setBtn1] = useState(false); 
  const [btn2, setBtn2] = useState(false); 
  const [btn3, setBtn3] = useState(false); 
  const [btn4, setBtn4] = useState(false); 
  const [btn5, setBtn5] = useState(false); 
  const [btn6, setBtn6] = useState(false); 
  const [btn7, setBtn7] = useState(false); 
  const [btn8, setBtn8] = useState(false); 


  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: "#000" }}>
      <View style={styles.container}>
        <Text style={styles.qstTxt}>What are you looking for? </Text>
        <View style={{ flexDirection: "row", marginTop: 20, flexWrap: "wrap" }}>
          <TouchableOpacity style={btn1 ?styles.btnQstSelected :  styles.btnQst} onPress= {() => setBtn1(!btn1)}>
            <Text style={btn1 ? styles.txtSelected : styles.txt}>Technology</Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={btn2 ?styles.btnQstSelected :  styles.btnQst } onPress= {() => setBtn2(!btn2)}>
            <Text style={btn2 ? styles.txtSelected : styles.txt}>Science</Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={btn3 ?styles.btnQstSelected :  styles.btnQst} onPress= {() => setBtn3(!btn3)}>
            <Text style={btn3 ? styles.txtSelected : styles.txt}>Design</Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={btn4 ?styles.btnQstSelected :  styles.btnQst} onPress= {() => setBtn4(!btn4)}>
            <Text style={btn4 ? styles.txtSelected : styles.txt}>Business</Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={btn5 ?styles.btnQstSelected :  styles.btnQst} onPress= {() => setBtn5(!btn5)}>
            <Text style={btn5 ? styles.txtSelected : styles.txt}>Collaboration</Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={btn6 ?styles.btnQstSelected :  styles.btnQst} onPress= {() => setBtn6(!btn6)}>
            <Text style={btn6 ? styles.txtSelected : styles.txt}>Innovation</Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={btn7 ?styles.btnQstSelected :  styles.btnQst} onPress= {() => setBtn7(!btn7)}>
            <Text style={btn7 ? styles.txtSelected : styles.txt}>Social change</Text>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={btn8 ?styles.btnQstSelected :  styles.btnQst} onPress= {() => setBtn8(!btn8)}>
            <Text style={btn8 ? styles.txtSelected : styles.txt}>Health</Text>
          </TouchableOpacity>
          
          
        </View>
        <View style={{ margin: 50 }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("SocialMedia")}
          >
            <Text style={btn2 ? styles.txtSelected : styles.txtBtn}>Next</Text>
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
    position: 'relative',
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
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
  qstTxt: {
    fontWeight: "900",
    fontSize: 24,
  },
  btnQst: {
    width: 370,
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 100,
  },
  txt: {
    fontSize: 14,
    fontWeight: "600",
  },
  btnQstSelected: {
    width: 370,
    height: 40,
    borderWidth: 1,
    borderColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 100,
    backgroundColor: '#F1F1F1'
  },
  txtSelected: {
    fontSize: 14,
    fontWeight: "600",
    color: '#000'
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

export default Question2Screen;
