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
import { WebBrowser } from "expo";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "groups"
  };


render() {
  return (
    <ScrollView style={styles.container}>
    {}
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
