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
    {
          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            >
              <MonoText style={styles.codeHighlightText}>
                screens/HomeScreen.js
              </MonoText>
            </View>

            <Text style={styles.getStartedText}>Mooch in development!</Text>
            <Button title="Sign out!" onPress={this._signOutAsync} />
          </View>
    }
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
