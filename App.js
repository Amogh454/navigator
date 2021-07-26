import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TransactionScreen from "./screens/Facebook";
import SearchScreen from "./screens/Insta";
import Youtube from "./screens/Youtube";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: TransactionScreen },
  Instagram: { screen: SearchScreen },
  Youtube: { screen: Youtube}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
   
    flex: 1, backgroundColor: "red",
    
 
  }
});
