import React, { useState } from "react";
import { StyleSheet, View, Button, ScrollView, TextInput } from "react-native";
import { useDispatch } from "react-redux";

export default function SetLocationinfo({ navigation, route }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [share, setShare] = useState("");
  const lati = route.params.coordinate[0];
  const long = route.params.coordinate[1];

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          style={styles.Input}
          placeholder={"장소 이름"}
          autoFocus={true}
          value={title}
          onChange={(e) => setTitle(e.nativeEvent.text)}
          returnKeyType={"next"}
          onSubmitEditing={() => {
            this.SecondTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.Input}
          placeholder={"장소 설명"}
          returnKeyType={"next"}
          value={desc}
          onChange={(e) => setDesc(e.nativeEvent.text)}
          ref={(input) => {
            this.SecondTextInput = input;
          }}
          onSubmitEditing={() => {
            this.ThirdTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.Input}
          placeholder={"공유 친구"}
          returnKeyType={"done"}
          onChange={(e) => setShare(e.nativeEvent.text)}
          ref={(input) => {
            this.ThirdTextInput = input;
          }}
        />
        <TextInput style={styles.Input} editable={false}>
          {lati}
        </TextInput>
        <TextInput style={styles.Input} editable={false}>
          {long}
        </TextInput>
      </ScrollView>
      <Button
        title="완료"
        onPress={() => {
          dispatch({
            type: "markerAdd",
            title: title,
            desc: desc,
            share: share,
            coordinate: { lati, long },
          });
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Input: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "gray",
    marginHorizontal: 15,
    paddingLeft: 10,
    height: 50,
    marginTop: 10,
  },
});
