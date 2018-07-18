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
              <View>
                <Text style={styles.errorText}>{this.state.error}</Text>
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                  <Text style={{ color: "#FFB800", fontSize: 24 }}>
                    Sign in to <Text style={{ color: "white" }}>Mooch!</Text>
                  </Text>
                </View>
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
              </View>
              <View style={styles.centerContainer}>
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
      this.setState({
        email: "",
        password: "",
        error: "Wrong email or password! Please try again."
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B0000"
  },
  centerContainer: {
    alignItems: "center"
  },
  errorText: {
    padding: 20,
    textAlign: "center",
    color: "white"
  },
  label: {
    color: "white",
    fontSize: 14
  },
  buttonContainer: {
    justifyContent: "space-between",
    width: "75%",
    paddingTop: 50,
    flexDirection: "row"
  },
  signinButton: {
    width: "45%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 7.5,
    paddingBottom: 7.5
  },
  signinButtonText: {
    color: "#5B0000",
    fontSize: 16
  },
  signupButton: {
    width: "45%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#FFB800",
    paddingTop: 7.5,
    paddingBottom: 7.5
  },
  signupButtonText: {
    color: "#FFB800",
    fontSize: 16
  }
});
