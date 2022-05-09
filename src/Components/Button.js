import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ onSubmit ,text,style}) => {
  return (
    <TouchableOpacity onPress={onSubmit}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
