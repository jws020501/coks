import React from "react";
import { View, StyleSheet, Image, StatusBar, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import * as Location from "expo-location";

/*
Location.startLocationUpdatesAsync(taskName, options)
Location.stopLocationUpdatesAsync(taskName)
*/
export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const { markers } = useSelector((state) => ({
    markers: state.markers,
  }));
  const { isEditting } = useSelector((state) => ({
    isEditting: state.isEditting,
  }));
  const { current_location } = useSelector((state) => ({
    current_location: state.current_location,
  }));

  // Location.watchPositionAsync(() => {
  // 	const { latitude, longitude } = Location.getCurrentPositionAsync();
  // 	dispatch({
  // 		type: 'changeLocation',
  // 		latitude: latitude,
  // 		longitude: longitude,
  // 	});
  // });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.Map}>
        <MapView
          style={styles.Map}
          initialRegion={{
            latitude: current_location.latitude,
            longitude: current_location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={"google"}
          onPress={(e) => {
            if (isEditting) {
              navigation.navigate("Linfo", {
                coordinate: [
                  e.nativeEvent.coordinate.latitude,
                  e.nativeEvent.coordinate.longitude,
                ],
              });
            }
          }}
        >
          <Marker
            coordinate={{
              latitude: current_location.latitude,
              longitude: current_location.longitude,
            }}
          >
            <View style={styles.marker}>
              <Image
                style={styles.markImage}
                source={require("../assets/Image/Icon/MapMarker.png")}
              />
            </View>
            <View style={styles.namebar}>
              <Text style={styles.nametext}>나</Text>
            </View>
          </Marker>
          {markers.map((marker) => {
            return (
              <Marker
                coordinate={{
                  latitude: marker.coordinate.lati,
                  longitude: marker.coordinate.long,
                }}
                title={marker.title}
                description={marker.description}
              >
                <View style={styles.marker}>
                  <Image
                    style={styles.markImage}
                    source={require("../assets/Image/Icon/MapMarker.png")}
                  />
                </View>
              </Marker>
            );
          })}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Map: {
    flex: 1,
  },
  marker: {
    width: 50,
    height: 50,
  },
  markImage: {
    width: 50,
    height: 50,
  },
  namebar: {
    width: 50,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  nametext: {
    color: "blue",
  },
});
