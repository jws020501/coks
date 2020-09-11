import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  TextInput,
  Avatar,
  Button,
  Portal,
  Dialog,
  Paragraph,
} from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function Register({ setNowComponent }) {
  // 서버통신부분
  // const getData = async () => {
  //   await fetch("http://192.168.144.12:5000/", {
  //     method: "GET",
  //     mode: "cors",
  //   }).then((res) => res.json());
  // };
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setUsers({
      ...users,
      profile: pickerResult.uri,
    });
  };

  const [users, setUsers] = useState({
    name: "",
    password: "",
    phone: "",
    profile: "",
  });

  useEffect(() => {
    // 서버통신부분
    // getData();
  }, []);

  const changeVal = (e) => {
    const event = e;
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });
  };

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    crossorigin: true,
  };

  const OnRegister = async () => {
    setVisible(false);
    // 서버통신부분
    // await axios
    //   .post(
    //     `http://192.168.144.12:5000/create`,
    //     {
    //       name: users.name,
    //       password: users.password,
    //       phone: users.phone,
    //       profile: users.profile,
    //     },
    //     {
    //       headers: headers,
    //     }
    //   )
    //   .then((res) => alert(res.data));
    setNowComponent("Login");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        style={styles.inputs}
        mode="outlined"
        label="User_Name"
        name="name"
        value={users.name}
        onChange={changeVal}
      />
      <TextInput
        style={styles.inputs}
        mode="outlined"
        name="password"
        label="PassWord"
        value={users.password}
        onChange={changeVal}
      />
      <TextInput
        style={styles.inputs}
        mode="outlined"
        name="phone"
        label="Phone_Number"
        value={users.phone}
        onChange={changeVal}
      />

      <TouchableOpacity
        style={[
          styles.inputs,
          { justifyContent: "center", alignItems: "center" },
        ]}
        onPress={openImagePickerAsync}
      >
        <Avatar.Image
          size={50}
          source={
            users.profile === ""
              ? {
                  uri:
                    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcAnr18%2FbtqGkhtqJ0z%2FMxovNWgkQPY7sPr5OA3JJ1%2Fimg.jpg",
                }
              : { uri: users.profile }
          }
        />
      </TouchableOpacity>
      <Button
        style={styles.inputs}
        icon="check"
        mode="contained"
        onPress={showDialog}
      >
        Register!
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>로그인 알림</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              현재 상태 닉네임 : {users.name} , 핸드폰 번호 : {users.phone} 및
              해당 프로필 사진으로 결정 하시겠습니까??
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={OnRegister}>회원가입</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  inputs: {
    margin: 10,
  },
});
