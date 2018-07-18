import React from "react";
import {
  Button,
  AsyncStorage,
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

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };
  state = {
    email: "",
    password: "",
    error: ""
  };
  render() {
    return (
      <Mutation mutation={LOGIN}>
        {login => {
          return (
            <View 
              style={styles.container}>
              <Text style={styles.errorText}>{this.state.error}</Text>
              <FormLabel>Email</FormLabel>
              <FormInput
                value={this.state.email}
                onChangeText={text => {
                  this.setState({ email: text });
                }}
              />

              <FormLabel>Password</FormLabel>
              <FormInput
                type="password"
                value={this.state.password}
                onChangeText={text => {
                  this.setState({ password: text });
                }}
              />

              <Button
                title="Sign in!"
                onPress={() => this._signInAsync(login)}
              />
              <View style={styles.signupButton}>
                <TouchableOpacity style={styles.signupButton}
                  title="Sign up!"
                  onPress={() => this.props.navigation.navigate("SignUp")}>
                  <Text style={styles.signupButtonText}>Sign up!</Text>
                </TouchableOpacity>
              </View> 
            </View>
          );
        }}
      </Mutation>
    );
  }

  _signInAsync = async login => {
    this.setState({ error: "" });
    try {
      const { data } = await login({
        variables: {
          email: this.state.email,
          password: this.state.password
        }
      });
      this.setState({ email: "", password: "" });
      await AsyncStorage.setItem("userToken", data.login.token);
      this.props.navigation.navigate("App");
    } catch (e) {
      console.log(e);
      this.setState({ email: "", password: "", error: "Invalid sign in credentials" });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#005B06"
  },
  errorText: {
      textAlign: "center",
  },
  signupButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB800",
  },
  signupButtonText: {
    color: "white"
  },
});
