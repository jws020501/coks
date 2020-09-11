import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
// import axios from "axios";

export default function Login() {
  const [users, setUsers] = useState({
    name: "",
    password: "",
  });

  // 서버 통신부분 사용하지 X
  // const OnfindUser = async () => {
  //   await axios
  //     .post("http://192.168.144.12:5000/login", {
  //       name: users.name,
  //       password: users.password,
  //     })
  //     .then((res) => alert(res.data));
  // };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.margin}
          label="UserName"
          mode="outlined"
          value={users.name}
          onChangeText={(text) =>
            setUsers({
              ...users,
              name: text,
            })
          }
        />
        <TextInput
          style={styles.margin}
          label="Password"
          mode="outlined"
          value={users.password}
          onChangeText={(text) =>
            setUsers({
              ...users,
              password: text,
            })
          }
        />
        <Button
          style={styles.margin}
          icon="key"
          mode="contained"
          onPress={OnfindUser}
        >
          Login
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  margin: {
    margin: 10,
  },
});
