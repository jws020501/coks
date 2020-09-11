import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyDrawer from "../Drawer";

import ChattingList from "../Chat/ChattingList";
import chat from "../Chat/Chat";

const Stack = createStackNavigator();
function Chatting_Navigator() {
  return (
    <Stack.Navigator initialRouteName="ChatList">
      <Stack.Screen
        name="ChatList"
        component={ChattingList}
        options={{
          headerLeft: () => <MyDrawer />,
          headerTitle: "채팅기록",
        }}
      />
      <Stack.Screen
        name="Chatting"
        component={chat}
        options={{
          headerTitle: "채팅",
        }}
      />
    </Stack.Navigator>
  );
}

export default Chatting_Navigator;
