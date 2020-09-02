import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Switch } from "react-native";

import MyDrawer from "../Drawer";
import HomeScreen from "../Home/Home";
import SetLocationScreen from "../Home/SetLocationInfo";

import { useDispatch, useSelector } from "react-redux";

const Stack = createStackNavigator();
function Home_Navigator() {
  const dispatch = useDispatch();
  const { isEditting } = useSelector((state) => ({
    isEditting: state.isEditting,
  }));
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => <MyDrawer />,
          headerRight: () => (
            <Switch
              style={{ marginRight: 20 }}
              onValueChange={() =>
                dispatch({
                  type: "switching",
                })
              }
              value={isEditting}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Linfo"
        component={SetLocationScreen}
        options={{
          headerBackTitle: "뒤로",
        }}
      />
    </Stack.Navigator>
  );
}

export default Home_Navigator;
