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
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome to Mooch"
  };
  state = {
    name: "Not signed in"
  };
  componentWillMount() {
    this.getName();
  }
  async getName() {
    const name = await AsyncStorage.getItem("name");
    this.setState({ name });
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.moochContainerWrapper}>
            <View style={styles.moochContainer}>
              <Text style={styles.moochText}> Mooch </Text>
            </View>
            <Text style={styles.helloText}>Hello, {this.state.name}</Text>
          </View>
          <TouchableOpacity
            style={styles.signoutButton}
            onPress={this._signOutAsync}
          >
            <Text style={styles.signoutButtonText}> Sign out! </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B0000",
    justifyContent: "center",
    alignItems: "center"
  },
  moochContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "white",
    width: "100%",
    marginTop: 150,
    marginBottom: 150
  },
  moochContainerWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  moochText: {
    color: "white",
    fontSize: 40,
    fontFamily: "Futura"
  },
  helloText: {
    color: "white",
    fontFamily: "Futura",
    fontSize: 28,
    marginBottom: 80
  },
  signoutButton: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 7.5,
    paddingBottom: 7.5
  },
  signoutButtonText: {
    color: "#5B0000",
    textAlign: "center",
    fontSize: 18
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  loadingText: {
    marginTop: 50,
    fontSize: 28,
    fontFamily: "AvenirNext-Medium"
  }
});
