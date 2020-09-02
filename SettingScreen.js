import React from "react";
import { View, StyleSheet, StatusBar, Button } from "react-native";

function SettingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.Content}></View>
    </View>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Content: {
    flex: 11,
  },
});
