import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image, StyleSheet } from "react-native";

import Home_Navigator from "./Home_Navigator";
import Friends_Navigator from "./Friends_Navigator";
import Chatting_Navigator from "./Chatting_Navigator";

const Tab = createBottomTabNavigator();

export default function Bottomtabnavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <Image
                source={require("../assets/Image/Icon/MainHome.png")}
                style={styles.Icon}
              />
            );
          } else if (route.name === "Friends") {
            return (
              <Image
                source={require("../assets/Image/Icon/Friends.png")}
                style={styles.Icon}
              />
            );
          } else if (route.name === "Chat") {
            return (
              <Image
                source={require("../assets/Image/Icon/Chatting.png")}
                style={styles.Icon}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="Friends"
        component={Friends_Navigator}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home_Navigator}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chatting_Navigator}
        options={{
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  Icon: {
    width: 50,
    height: 50,
  },
});
