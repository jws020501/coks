import { Firebase } from "react-native-firebase";
require("firebase/database");

var config = {
  apiKey: "AIzaSyBv65DnBNccas_8VimaHDvOjb_xAscuVr8",
  authDomain: "coks-project.firebaseapp.com",
  databaseURL: "https://coks-project.firebaseio.com",
  projectId: "coks-project",
  storageBucket: "coks-project.appspot.com",
  messagingSenderId: "142458364491",
  appId: "1:142458364491:web:ff8ad45c31be08c8d3e3ce",
  measurementId: "G-4J3DKKHR4H",
};
class FirebaseSvc {
  constructor() {
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config);
    } else {
      console.log("firebase apps already running...");
    }
  }
  dbsend(data) {
    Firebase.database()
      .ref("message/" + data.room_name)
      .push({ name: data.name, text: data.text });
    alert(data);
  }
}

const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;
