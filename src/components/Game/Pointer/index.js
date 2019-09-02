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
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 100
    }}>
    <Image
      style={{flex: 1, transform: [{ rotate: '-45deg'}]}}
      source={pointer}
      resizeMode="contain"
    />
  </View>)
}

export default Pointer;
