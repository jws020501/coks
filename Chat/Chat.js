import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  DatePickerAndroid,
} from "react-native";
import MessageBubble from "./chatbuble";
import { useDispatch, useSelector } from "react-redux";
import { navigation } from "@react-navigation/native";

import * as firebase from "firebase";
require("firebase/database");

var firebaseConfig = {
  apiKey: "AIzaSyBv65DnBNccas_8VimaHDvOjb_xAscuVr8",
  authDomain: "coks-project.firebaseapp.com",
  databaseURL: "https://coks-project.firebaseio.com",
  projectId: "coks-project",
  storageBucket: "coks-project.appspot.com",
  messagingSenderId: "142458364491",
  appId: "1:142458364491:web:ff8ad45c31be08c8d3e3ce",
  measurementId: "G-4J3DKKHR4H",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let LastDate = 1;

export default function chat({ navigation, route }) {
  const todaydate = Date.now();
  const dispatch = useDispatch();
  var name = "asd";
  const [text, setText] = useState("");
  const { msg } = useSelector((state) => ({
    msg: state.msg,
  }));
  var room_name = route.params.name;

  socketUpdate();
  socketconn();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="default" barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.Board}
        keyboardVerticalOffset={Platform.select({
          ios: 85,
          Android: 520,
        })}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <View style={styles.chat}>
          <ScrollView
            style={{ flex: 1 }}
            ref={(scroll) => {
              this.scroll = scroll;
            }}
          >
            {msg.map((message) => {
              return message.name == "익명" ? (
                <MessageBubble mine text={message.message} />
              ) : (
                <MessageBubble text={message.message} name={message.name} />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.Keyboard}>
          <TextInput
            autoFocus={true}
            style={styles.input}
            onFocus={scrolldown}
            placeholder={"여기에 텍스트를 입력하세요."}
            onSubmitEditing={() => send()}
            value={text}
            onChangeText={(value) => {
              setText(value);
            }}
            returnKeyType={"done"}
          />
          <TouchableOpacity style={styles.sendbtn} onPress={() => send()}>
            <Text style={{ color: "white" }}>전송</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );

  function send() {
    firebase
      .database()
      .ref("message/" + room_id)
      .push({ name: "테스트", text: "테스트" });
  }

  function scrolldown() {
    setTimeout(() => {
      scroll.scrollToEnd({ animated: true });
    }, 100);
  }
  function socketconn() {
    socket.emit("sendi"),
      {
        room_id: room_name,
      };
  }

  function socketUpdate() {
    socket.on("update", (data) => {
      if (LastDate != data.date) {
        dispatch({
          type: "Update",
          name: data.name,
          message: data.message,
          date: data.date,
        });
        LastDate = data.date;
      }
    });
    scrolldown();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8080ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    // marginTop: getStatusBarHeight(true) + 4,
  },

  Board: {
    flex: 1,
    width: width - 50,
    height: height - 120,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  chat: {
    flex: 10,
    paddingTop: 20,
  },

  Keyboard: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
  },

  input: {
    flex: 4,
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "gray",
    paddingLeft: 10,
  },

  sendbtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 40,
    borderWidth: 1,
    backgroundColor: "#59DA50",
  },

  send: {
    backgroundColor: "#FAED7D",
    flex: 1,
    alignSelf: "flex-start",
    padding: 10,
    paddingHorizontal: 30,
    marginLeft: 20,
    marginBottom: 10,
  },

  receive: {
    backgroundColor: "#4374D9",
    color: "white",
    alignSelf: "flex-end",
    padding: 10,
    paddingHorizontal: 30,
    marginRight: 20,
    marginBottom: 10,
  },
});
