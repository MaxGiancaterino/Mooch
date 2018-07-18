import React from "react";
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  View
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "groups",
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateGroupModal")}
        >
          <EvilIcons name="plus" size={32} />
        </TouchableOpacity>
      ),
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
  };

  render() {
    return <ScrollView style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
