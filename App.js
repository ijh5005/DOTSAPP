/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Game from "./src/components/Game";
import MotivationScreen from "./src/components/Game/MotivationScreen";
import StoreScreen from "./src/components/Game/StoreScreen";
import PlayGame from "./src/components/Game/PlayGame";
import Splash from "./src/components/Game/Splash";

const MainNavigator = createStackNavigator({
  Home: { screen: Splash },
  HomePage: { screen: Game },
  Motivation: { screen: MotivationScreen },
  Store: { screen: StoreScreen },
  Game: { screen: PlayGame }
});

export default createAppContainer(MainNavigator);
