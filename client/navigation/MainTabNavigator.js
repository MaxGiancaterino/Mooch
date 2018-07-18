import React from "react";
import { Platform, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import GroupsScreen from "../screens/GroupsScreen";
import ViewGroupScreen from "../screens/ViewGroupScreen";
import ModalCreateGroup from "../screens/ModalCreateGroup";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const GroupsStack = createStackNavigator({
  Groups: GroupsScreen,
  Group: ViewGroupScreen
});

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-link${focused ? "" : "-outline"}`
          : "md-link"
      }
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-options${focused ? "" : "-outline"}`
          : "md-options"
      }
    />
  )
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  GroupsStack,
  SettingsStack
});

const RootStack = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    },
    ModalCreateGroup: {
      screen: ModalCreateGroup
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default RootStack;
