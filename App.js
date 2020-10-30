import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-svg";
import Footer from "./Components/Footer";
import Chat from "./Screens/Chat";
import Feeds from "./Screens/Feeds";
import Notification from "./Screens/Notification";
import Profile from "./Screens/Profile";

export default function App() {
  const [screen, setScreen] = useState("feeds");
  const homeButton = () => {
    setScreen("feeds");
  };
  const chatButton = () => {
    setScreen("chat");
  };
  const notificationButton = () => {
    setScreen("notification");
  };
  const profileButton = () => {
    setScreen("profile");
  };
  let page;
  if (screen === "feeds") {
    page = <Feeds />;
  } else if (screen === "chat") {
    page = <Chat />;
  } else if (screen === "notification") {
    page = <Notification />;
  } else if (screen === "profile") {
    page = <Profile />;
  }
  return (
    <View style={styles.container}>
      {page}

      <Footer
        homeButton={homeButton}
        chatButton={chatButton}
        notificationButton={notificationButton}
        profileButton={profileButton}
        screen={screen}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fafafa",
    color: "white",
  },
});
