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
            <View style={styles.container}>
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

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.signinButton}
                  onPress={() => this._signInAsync(login)}
                >
                  <Text style={styles.signinButtonText}>Sign in!</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.signupButton}
                  onPress={() => this.props.navigation.navigate("SignUp")}
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
      console.log(data.login.token);
      await AsyncStorage.setItem("token", data.login.token);
      this.props.navigation.navigate("App");
    } catch (e) {
      console.log(e);
      this.setState({
        email: "",
        password: "",
        error: "Invalid sign in credentials"
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#005B06",
    alignItems: "center"
  },
  errorText: {
    textAlign: "center"
  },
  buttonContainer: {
    width: "75%",
    paddingTop: 20,
    flexDirection: "row"
  },
  signinButton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 5
  },
  signinButtonText: {
    color: "#005B06",
    fontSize: 20
  },
  signupButton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB800",
    paddingTop: 5,
    paddingBottom: 5
  },
  signupButtonText: {
    color: "white",
    fontSize: 20
  }
});
