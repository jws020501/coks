import React from "react";
import { View, StyleSheet, StatusBar, Button } from "react-native";

export default function FriendsList({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.Content}>
        <Button
          title="Press"
          onPress={() => navigation.navigate("FriendInfo")}
        />
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
