import React from "react";
import {
  View,
  Image
} from "react-native";

const pointer = require("../../../imgs/pointer.png");

const Pointer = (props) => {

  const {
    startingLeft,
    startingBottom
  } = props;

  return (<View
    removeClippedSubviews={true}
    pointerEvents="none"
    style={{
      position: "absolute",
      bottom: startingBottom,
      left: startingLeft,
      height: 26,
      width: 26,
      justifyContent: "center",
      alignItems: "center"
    }}>
    <Image
      style={{flex: 1, transform: [{ rotate: '-30deg'}]}}
      source={pointer}
      resizeMode="contain"
    />
  </View>)
}

export default Pointer;
