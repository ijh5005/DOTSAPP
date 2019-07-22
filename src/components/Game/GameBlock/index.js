import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";

import Pointer from "../Pointer";
import { boxInfo } from "../util/BoxInfo";
import { images } from "../util/Images";

const GameBlock = (props) => {

  let opacity = new Animated.Value(0);
  useEffect(() => {
    if(props.explodingBoxes[props.index]){
      setTimeout(() => {
        Animated.timing(
          opacity,
          {
            toValue: 1,
            duration: 100,
          }
        ).start(() => {
          Animated.timing(
            opacity,
            {
              toValue: 0,
              duration: 100,
            }
          ).start();
        });
      }, props.explodingBoxes[props.index].waitTime)
    }
  }, [props.explodingBoxes]);

  const {
    isDisabledBox,
    borders,
    clickBorder,
    index,
    hasScored,
    scored,
    borderColors,
    computerLastLineClick,
    boxName,
    isTopRightCornerBox,
    isTopLeftCornerBox,
    isBottomRightCornerBox,
    isBottomLeftCornerBox,
    isTopSideRow,
    isRightSideRow,
    isBottomSideRow,
    isLeftSideRow,
    footIndexes,
    blinkingEdge,
    blinkingBox,
    navigation
  } = props;

  // props.navigation.addListener('willBlur', () => stopAnimation = true);

  // let stopAnimation = false;
  // const startingColor = 0;
  // const endingColor = 1;
  // let colorAnimation = new Animated.Value(startingColor);
  // const letterColor = colorAnimation.interpolate({
  //   inputRange: [ 0, 1 ],
  //   outputRange: [ '#49115e', '#b57800' ]
  // });
  //
  // useEffect(() => {
  //   const animateScoreBoard = (obj) => {
  //     Animated.timing(
  //       colorAnimation,
  //       { toValue: endingColor, duration: 500, isInteraction: false }
  //     ).start(() => {
  //       Animated.timing(
  //         colorAnimation,
  //         { toValue: startingColor, duration: 500, isInteraction: false }
  //       ).start(animateScoreBoard);
  //     });
  //   }
  //   animateScoreBoard();
  // }, [])

  let stopAnimation = false;
  const startingColor = 0;
  const endingColor = 1;
  let colorAnimation = new Animated.Value(startingColor);
  const letterColor = colorAnimation.interpolate({
    inputRange: [ 0, 1 ],
    outputRange: [ '#49115e', '#F9A600' ]
  });

  const animateScoreBoard = (obj) => {
    Animated.timing(
      colorAnimation,
      { toValue: endingColor, duration: 500, delay: 500 }
    ).start();
  }
  animateScoreBoard();

  const scoreColor = (scored === "second") && "#2b0938";
  let topBorderColor = (borderColors[0] === "first") ? "#b57800" : (borderColors[0] === "second") ? "#980000" : "rgb(73, 17, 94)";
  let rightBorderColor = (borderColors[1] === "first") ? "#b57800" : (borderColors[1] === "second") ? "#980000" : "rgb(73, 17, 94)";
  let bottomBorderColor = (borderColors[2] === "first") ? "#b57800" : (borderColors[2] === "second") ? "#980000" : "rgb(73, 17, 94)";
  let leftBorderColor = (borderColors[3] === "first") ? "#b57800" : (borderColors[3] === "second") ? "#980000" : "rgb(73, 17, 94)";

  const computerCurrentMove = computerLastLineClick && computerLastLineClick.boxes.includes(boxName);
  if(computerCurrentMove){
    const lastClickColor = "#FF0000";
    const indexOfBox = computerLastLineClick.boxes.indexOf(boxName);
    if(computerLastLineClick.sides[indexOfBox] === "top"){
      topBorderColor = lastClickColor;
    } else if (computerLastLineClick.sides[indexOfBox] === "right") {
      rightBorderColor = lastClickColor;
    } else if (computerLastLineClick.sides[indexOfBox] === "bottom") {
      bottomBorderColor = lastClickColor;
    } else if (computerLastLineClick.sides[indexOfBox] === "left") {
      leftBorderColor = lastClickColor;
    }
  }

  const borderStyles = boxInfo.getBorderStyles(
    borders, isTopRightCornerBox, isTopLeftCornerBox,
    isTopSideRow, isBottomRightCornerBox, isBottomLeftCornerBox,
    isBottomSideRow, isRightSideRow, isLeftSideRow
  );

  let borderTopWidth = (isTopRightCornerBox || isTopLeftCornerBox || isTopSideRow) ? 2 : 1;
  let borderRightWidth = (isTopRightCornerBox || isBottomRightCornerBox || isRightSideRow) ? 2 : 1;
  let borderBottomWidth = (isBottomRightCornerBox || isBottomLeftCornerBox || isBottomSideRow) ? 2 : 1;
  let borderLeftWidth = (isTopLeftCornerBox || isBottomLeftCornerBox || isLeftSideRow) ? 2 : 1;
  if(computerCurrentMove){
    borderTopWidth++
    borderRightWidth++
    borderBottomWidth++
    borderLeftWidth++
  }

  const styles = {
    box: { // replace #F9A600 with letter when ok to animate
      backgroundColor: blinkingBox ? letterColor : (scoreColor || 'transparent'),
      height: 55,
      width: 55,
      position: "relative",
      opacity: isDisabledBox ? 0 : 1,
      zIndex: isDisabledBox ? 1 : 5,
      borderTopWidth: borderTopWidth,
      borderRightWidth: borderRightWidth,
      borderBottomWidth: borderBottomWidth,
      borderLeftWidth: borderLeftWidth,
      borderTopColor: (blinkingEdge === "top") ? letterColor : topBorderColor,
      borderRightColor: (blinkingEdge === "right") ? letterColor : rightBorderColor,
      borderBottomColor: (blinkingEdge === "bottom") ? letterColor : bottomBorderColor,
      borderLeftColor: (blinkingEdge === "left") ? letterColor : leftBorderColor
    },
    top: {
      height: "40%",
      width: "100%",
      position: "absolute",
      top: "-18%"
    },
    right: {
      height: "100%",
      width: "40%",
      position: "absolute",
      right: "-18%"
    },
    bottom: {
      height: "40%",
      width: "100%",
      position: "absolute",
      bottom: "-18%"
    },
    left: {
      height: "100%",
      width: "40%",
      left: "-18%",
      position: "absolute",
      top: 0
    },
    topLeft: {
      position: "absolute",
      top: -4,
      left: -4,
      height: 8,
      width: 8,
      backgroundColor: "#270038",
      borderRadius: 2
    },
    topRight: {
      position: "absolute",
      top: -4,
      right: -4,
      height: 8,
      width: 8,
      backgroundColor: "#270038",
      borderRadius: 2
    },
    bottomLeft: {
      position: "absolute",
      bottom: -4,
      left: -4,
      height: 8,
      width: 8,
      backgroundColor: "#270038",
      borderRadius: 2
    },
    bottomRight: {
      position: "absolute",
      right: -4,
      bottom: -4,
      height: 8,
      width: 8,
      backgroundColor: "#270038",
      borderRadius: 2
    },
    yourScore: {
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0
    },
    foot: {
      height: "120%",
      width: "100%",
      top: "-10%",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center"
    }
  }

  const clickGameBox = () => {
    props.setExplosionBoxes(props.index);
  }

  let startingLeft = false;
  let startingBottom = false;
  if(blinkingEdge === "top"){
    startingLeft = 35;
    startingBottom = 60;
  } else if (blinkingEdge === "left" || blinkingBox) {
    startingLeft = blinkingBox ? 60 : 10;
    startingBottom = 20;
  }

  const showPointer = (startingLeft && startingBottom) || blinkingBox;

  return (<TouchableOpacity onPress={() => clickGameBox()}>
    <Animated.View style={{...styles.box, ...borderStyles}}>

      {(scored === "first") && <View style={styles.yourScore}>
        <Image
          style={{flex:1, height: null, width: null}}
          source={images.gold}
        />
      </View>}

      <Animated.View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#980000",
          opacity: opacity}}>
      </ Animated.View>

      <View style={styles.topLeft} />
      <View style={styles.topRight} />
      <View style={styles.bottomLeft} />
      <View style={styles.bottomRight} />

      <TouchableOpacity style={styles.top} onPress={() => clickBorder("top", index, "first")}>
        <View />
      </TouchableOpacity>

      <TouchableOpacity style={styles.right} onPress={() => clickBorder("right", index, "first")}>
        <View />
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottom} onPress={() => clickBorder("bottom", index, "first")}>
        <View />
      </TouchableOpacity>

      <TouchableOpacity style={styles.left} onPress={() => clickBorder("left", index, "first")}>
        <View />
      </TouchableOpacity>

      {(footIndexes.includes(index)) && <View style={styles.foot}>
        <Image
          style={{flex:1, height: 50, width: 50}}
          source={images.foot}
        />
      </View>}

      {showPointer && <Pointer
            startingLeft={startingLeft}
            startingBottom={startingBottom}
            duration={500}
            distance={10}/>}

    </Animated.View>
  </TouchableOpacity>)

}

export default GameBlock;
