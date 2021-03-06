import React from "react";
import { Platform, Text } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import GroupsScreen from "../screens/GroupsScreen";
import ViewGroupScreen from "../screens/ViewGroupScreen";
import ModalCreateGroup from "../screens/ModalCreateGroup";
import ModalCreatePayment from "../screens/ModalCreatePayment";
import ModalUpdatePayment from "../screens/ModalUpdatePayment";
import ModalResolvePayment from "../screens/ModalResolvePayment";
import PaymentsScreen from "../screens/PaymentsScreen";

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
const GroupNavigator = createMaterialTopTabNavigator({
  GroupMembers: ViewGroupScreen,
  GroupPayments: PaymentsScreen
});

const GroupsStack = createStackNavigator({
  Groups: GroupsScreen,
  Group: GroupNavigator
});

GroupsStack.navigationOptions = {
  tabBarLabel: "Groups",
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
    },
    ModalCreatePayment: {
      screen: ModalCreatePayment
    },
    ModalUpdatePayment: {
      screen: ModalUpdatePayment
    },
    ModalResolvePayment: {
      screen: ModalResolvePayment
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default RootStack;
