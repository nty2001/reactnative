import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import Between from "../Components/Between";
import Bottom from "../Components/Bottom";
import Submit from "../Components/Submit";
import ButtonModal from "../Components/ButtonModal";
import Alert from "../Components/Alert";
import { useState } from "react";
const LeaveScreen = () => {
  const [Modal, setModal] = useState(true);
  const [blur, setBlur] = useState(true);
  const onChange = () => {
    setModal(false);
  };
  const [Tick, setTick] = useState(true);
  console.log("🚀 ~ file: LeaveScreen.js ~ line 23 ~ LeaveScreen ~ Tick", Tick);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ opacity: blur ? 1 : 0.3 }}>
        {Modal ? (
          <>
            <Header Modal={Modal} />
            <Between />
            <Bottom />
          </>
        ) : (
          <>
            <Header Modal={Modal} />
            <Submit setBlur={setBlur} />
          </>
        )}
      </View>
      {Modal ? (
        <>
          <View style={styles.add}>
            <TouchableOpacity onPress={onChange}>
              <Text style={styles.create}>+</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
      {blur == false && Tick == true ? (
        <View style={styles.container}>
          <ButtonModal
            setBlur={setBlur}
            setTick={setTick}
            setModal={setModal}
          />
        </View>
      ) : null}
      {Tick == false && <View style={styles.leaveAlert}><Alert /></View>}
    </ScrollView>
  );
};

export default LeaveScreen;
const styles = StyleSheet.create({
  add: {
    height: 70,
    width: 70,
    backgroundColor: "#2FD686",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 40,
    alignSelf: "flex-end",
    top: -139,
    left: -30,
    shadowColor: "#7AF176",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  create: {
    color: "#FFFFFF",
    fontSize: 56,
    marginTop: -2,
  },
  container: {
    position: "absolute",
    top: "30%",
    width: "80%",
    left: "10%",
  },
  leaveAlert:{
    position: "absolute",
    top: "20%",
    width: "80%",
    left: "10%",
  },
});
