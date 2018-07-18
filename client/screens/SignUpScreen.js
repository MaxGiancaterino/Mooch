import React from "react";
import {
  Button,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SIGN_UP = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign up"
  };
  state = {
    name: "",
    email: "",
    password: "",
    error: ""
  };
  render() {
    return (
      <Mutation mutation={SIGN_UP}>
        {signup => {
          return (
            <View style={styles.container}>
              <Text style={styles.errorText}>{this.state.error}</Text>
              <View style={{ alignItems: "center", marginBottom: 20 }}>
                <Text style={{ color: "#FFB800", fontSize: 24 }}>
                  Sign up for <Text style={{ color: "white" }}>Mooch!</Text>
                </Text>
              </View>
              <FormLabel labelStyle={styles.label}>Full name</FormLabel>
              <FormInput
                value={this.state.name}
                onChangeText={text => {
                  this.setState({ name: text });
                }}
              />

              <FormLabel labelStyle={styles.label}>Email</FormLabel>
              <FormInput
                value={this.state.email}
                onChangeText={text => {
                  this.setState({ email: text });
                }}
              />

              <FormLabel labelStyle={styles.label}>Password</FormLabel>
              <FormInput
                type="password"
                value={this.state.password}
                onChangeText={text => {
                  this.setState({ password: text });
                }}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.signupButton}
                  onPress={() => this._signInAsync(signup)}
                >
                  <Text style={styles.signupButtonText}>Sign up!</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Mutation>
    );
  }

  _signUpAsync = async signup => {
    this.setState({ error: "" });
    try {
      const { data } = await signup({
        variables: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        }
      });
      this.setState({ name: "", email: "", password: "" });
      await AsyncStorage.setItem("userToken", data.signup.token);
      this.props.navigation.navigate("App");
    } catch (e) {
      console.log(e);
      this.setState({
        name: "",
        email: "",
        password: "",
        error: "Invalid sign up credentials"
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B0000"
  },
  errorText: {
    padding: 20,
    textAlign: "center"
  },
  label: {
    color: "white",
    fontSize: 14
  },
  buttonContainer: {
    alignItems: "center",
    paddingTop: 30
  },
  signupButton: {
    width: "30%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 7.5,
    paddingBottom: 7.5
  },
  signupButtonText: {
    color: "#5B0000",
    fontSize: 16
  }
});
