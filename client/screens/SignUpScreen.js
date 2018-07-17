import React from "react";
import {
  Button,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text
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

              <FormLabel>Full name</FormLabel>
              <FormInput
                value={this.state.name}
                onChangeText={text => {
                  this.setState({ name: text });
                }}
              />

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
                title="Sign up!"
                onPress={() => this._signUpAsync(signup)}
              />
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
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  errorText: {
    textAlign: "center"
  }
});
