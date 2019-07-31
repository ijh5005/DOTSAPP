import React from "react";
import {
  View,
  Image,
  Animated
} from "react-native";

const pointer = require("../../../imgs/pointer.png");

const Pointer = (props) => {
  console.log("hey")

  const {startingLeft, startingBottom, duration, distance} = props;

  const stoppingLeft = startingLeft + distance;
  const stoppingBottom = startingBottom + distance;
  let left = new Animated.Value(startingLeft);
  let bottom = new Animated.Value(startingBottom);

  let count = 0;

  const moveImage = (value, starting, stopping) => {
    Animated.timing(
      value,
      { toValue: starting, duration }
    ).start(() => {
      Animated.timing(
        value,
        { toValue: stopping, duration }
      ).start(({finished}) => {
        if(finished){
          count++;
          if(count < 20){
            moveImage(value, starting, stopping);
          }
        }
      });
    });
  }

  moveImage(left, startingLeft, stoppingLeft);
  moveImage(bottom, startingBottom, stoppingBottom);

  return (<Animated.View
    removeClippedSubviews={true}
    pointerEvents="none"
    style={{
      position: "absolute",
      bottom,
      left,
      height: 26,
      width: 26,
      justifyContent: "center",
      alignItems: "center"
    }}>
    <Image
      style={{flex: 1, transform: [{ rotate: '-45deg'}]}}
      source={pointer}
      resizeMode="contain"
    />
  </Animated.View>)
}

export default Pointer;
