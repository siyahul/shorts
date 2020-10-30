import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity,useWindowDimensions } from "react-native";
import FooterBG from "../assets/FooterIcons/Footer.png";
import HomeIcon from "../assets/FooterIcons/HomeIcon.png";
import HomeIconInactive from "../assets/FooterIcons/HomeIconInActive.png";
import ChatIcon from "../assets/FooterIcons/ChatIcon.png";
import ChatIconActive from "../assets/FooterIcons/ChatIconActive.png";
import AddIcon from "../assets/FooterIcons/AddIcon.png";
import NotificationIcon from "../assets/FooterIcons/Notification.png";
import NotificationActiveIcon from "../assets/FooterIcons/NotificationActive.png";
import ProfileIcon from "../assets/FooterIcons/ProfileIcon.png";
import ProfileIconActive from "../assets/FooterIcons/ProfileIconActive.png";

let widthOfScreen;

const Footer = ({
  homeButton,
  chatButton,
  notificationButton,
  profileButton,
  screen,
}) => {
  const [home, setHome] = useState(true);
  const [notification, setNotification] = useState(false);
  const [chat, setChat] = useState(false);
  const [profile, setProfile] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  widthOfScreen = windowWidth;
  console.log(windowWidth,windowHeight);
  useEffect(()=>{
    if (screen === "feeds") {
      setHome(true);
      setNotification(false);
      setChat(false);
      setProfile(false);
    } else if (screen === "notification") {
      setNotification(true);
      setHome(false);
      setChat(false);
      setProfile(false);
    } else if (screen === "chat") {
      setChat(true);
      setHome(false);
      setNotification(false);
      setProfile(false);
    } else if (screen === "profile") {
      setProfile(true);
      setChat(false);
      setHome(false);
      setNotification(false);
    }
  },[screen])
  console.log(Math.round((windowWidth/100)*50))
  return (
    <View style={styles.Footer}>
      <Image style={styles.img} source={FooterBG} />
      <View style={styles.FooterContainer}>
      <View style={styles.HomeIconContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={homeButton}>
          {home ? (
            <Image style={styles.Icon} source={HomeIcon} />
          ) : (
            <Image style={styles.Icon} source={HomeIconInactive} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.ChatIconContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={chatButton}>
          {chat ? (
            <Image style={styles.Icon} source={ChatIconActive} />
          ) : (
            <Image style={styles.Icon} source={ChatIcon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.addIconContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image style={styles.addIcon} source={AddIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.NotificationIconContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={notificationButton}>
          {notification ? (
            <Image style={styles.Icon2} source={NotificationActiveIcon} />
          ) : (
            <Image style={styles.Icon2} source={NotificationIcon} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.ProfileIconContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={profileButton}>
          {profile ? (
            <Image style={styles.Icon2} source={ProfileIconActive} />
          ) : (
            <Image style={styles.Icon2} source={ProfileIcon} />
          )}
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  Footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  FooterContainer:{
    width:"100%",
    height:70,
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection:"row"
  },
  img: {
    position:"absolute",
    width: "100%",
    resizeMode:"cover",
    bottom:0,
  },
  HomeIconContainer: {
    width: 30,
  },
  ChatIconContainer: {
    width: 30,
  },
  Icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  Icon2: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  addIcon: {
    width: 60,
    height: 60,
    borderWidth: 5,
    borderRadius: 30,
    padding: 2,
    borderColor: "#fafafa",
  },
  addIconContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom:25,
    elevation: 30,
  },
  NotificationIconContainer: {
    width: 30,
  },
  ProfileIconContainer: {
    width: 30,
  },
});
