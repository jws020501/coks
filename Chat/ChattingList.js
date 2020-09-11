import React from "react";
import {
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const arr = [1, 2, 3];

export default function ChattingList({ navigation }) {
  const Item = ({ title }) => {
    return (
      <TouchableOpacity
        style={styles.item_container}
        onPress={() => navigation.navigate("Chatting", { name: title })}
      >
        <Text style={styles.item_text}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const render = ({ item }) => <Item title={item} />;
  return (
    <FlatList
      keyExtractor={(item) => item.toString()}
      data={arr}
      renderItem={render}
    />
  );
}
const styles = StyleSheet.create({
  item_container: {
    borderBottomWidth: 1,
    height: 100,
  },
  item_text: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 50,
  },
});
