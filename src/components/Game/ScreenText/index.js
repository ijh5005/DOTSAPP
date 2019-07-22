import React from "react";
import {
  View,
  Text,
  Animated
} from "react-native";

import { config } from "../util/Settings";

const ScreenText = (props) => {

  const { text, font } = props;

  let t1;
  let t2;
  let t3;

  if(typeof text === "string"){
    t1 = text;
  } else {
    t1 = text.text;
    t2 = text.text2;
    t3 = text.text3;
  }

  let top = new Animated.Value(500);
  let opacity = new Animated.Value(0);

  Animated.timing(
    opacity,
    { toValue: 1, duration: 400 }
  ).start(() => {
    setTimeout(() => {
      Animated.timing(
        opacity,
        { toValue: 0, duration: 500 }
      ).start()
    }, 250)
  });
  Animated.timing(
    top,
    { toValue: 200, duration: 400 }
  ).start(() => {
    setTimeout(() => {
      Animated.timing(
        top,
        { toValue: -100, duration: 500 }
      ).start()
    }, 500)
  });

  const styles = {
    textSectionStlye: {
      width: config.width,
      justifyContent: "center",
      alignItems: "center"
    },
    text: {
      color: "#b57800",
      fontSize: font || 40,
      fontFamily: "Raleway-ExtraBoldItalic"
    }
  };

  const gameOverStyle = (top, opacity) => {
    return {
      width: config.width,
      height: config.height,
      position: "absolute",
      height: 40,
      top: 110,
      //top,
      left: 0,
      opacity: 1
      //opacity
    }
  }

  return (<Animated.View style={gameOverStyle(top, opacity)} removeClippedSubviews={true}>
    <View style={styles.textSectionStlye}>
      <Text style={styles.text}>{t1}</Text>
      <Text style={{...styles.text, ...{color: "#FF0000"}}}>{t2}</Text>
      <Text style={styles.text}>{t3}</Text>
    </View>
  </Animated.View>)
}

export default ScreenText;
