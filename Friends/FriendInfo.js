import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";

export default function FriendInfo({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.Content}>
        <Text>FriendInfo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Content: {
    flex: 1,
  },
});
