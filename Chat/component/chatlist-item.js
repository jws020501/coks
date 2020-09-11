import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Item = ({ num }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{num}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: 100,
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 50,
  },
});

export default Item;
