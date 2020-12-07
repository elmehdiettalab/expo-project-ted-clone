import * as firebase from "firebase";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { setCustomText } from "react-native-global-props";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import LandingAuthSreen from "./src/auth/LandingAuthSreen";
import Question1Screen from "./src/auth/Question1Screen";
import Question2Screen from "./src/auth/Question2Screen";
import SocialMediaSignIn from "./src/auth/socialMediaSignIn";
import SignUpScreen from "./src/auth/signUpScreen";
import HomeTabScreen from "./src/TED/HomeTabScreen";
import RadioTabScreen from "./src/TED/RadioTabScreen";
import SearchTabScreen from "./src/TED/SearchTabScreen";
import ProfileTabScreen from "./src/TED/ProfileTabScreen";
import { MaterialIcons } from "@expo/vector-icons";
import VideoScreen from "./src/TED/videoScreens/VideoScreen";
import AddTabScreen from "./src/TED/AddTabScreen";
import ChannelScreen from "./src/TED/radioScreens/ChannelScreen";

let firebaseConfig = {
  apiKey: "AIzaSyDWMDxRUZp_bmS5-8rpCjdLmK9kReZ-TeE",
  authDomain: "ted-clone.firebaseapp.com",
  databaseURL: "https://ted-clone.firebaseio.com",
  projectId: "ted-clone",
  storageBucket: "ted-clone.appspot.com",
  messagingSenderId: "880384111258",
  appId: "1:880384111258:web:5d3fb9805f82dfe9c2e523",
};
// Initialize Firebase
if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const VideoDisplayStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

const RadioStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Radio" component={RadioTabScreen}  options={{headerShown: false}} />
      <Stack.Screen name="Channel" component={ChannelScreen}  options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Radio") {
            iconName = "radio";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Profile") {
            iconName = "account-circle";
          } else if (route.name === "Add") {
            iconName = "add-circle-outline";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FFF",
        inactiveTintColor: "gray",
        showLabel: false,
        style: {
          backgroundColor: "#0D0D0D",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Home" component={VideoDisplayStack} />
      <Tab.Screen name="Radio" component={RadioStack} />
      <Tab.Screen name="Add" component={AddTabScreen} />
      <Tab.Screen name="Search" component={SearchTabScreen} />
      <Tab.Screen name="Profile" component={ProfileTabScreen} />
    </Tab.Navigator>
  );
};

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingAuth"
          component={LandingAuthSreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Qst1"
          component={Question1Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Qst2"
          component={Question2Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SocialMedia"
          component={SocialMediaSignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const customTextProps = {
  style: {
    fontFamily: "Helvetica",
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
  },
};
setCustomText(customTextProps);
export default MainApp;
