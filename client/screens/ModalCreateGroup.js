import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  AsyncStorage
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import gql from "graphql-tag";
import { Query, Mutation, ApolloConsumer } from "react-apollo";
import User from "../components/User";

const CREATE_GROUP = gql`
  mutation createGroup($data: GroupCreateInput!) {
    createGroup(data: $data) {
      id
      name
    }
  }
`;

const USER = gql`
  query users($where: UserWhereInput!) {
    users(where: $where) {
      email
      name
    }
  }
`;

class ModalCreateGroup extends React.Component {
  state = {
    name: "",
    email: "",
    emails: [],
    names: [],
    error: ""
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, marginTop: 50 }}>
          <FormLabel>Group name</FormLabel>
          <FormInput
            value={this.state.name}
            onChangeText={text => {
              this.setState({ name: text });
            }}
          />
          <FormLabel>Member email</FormLabel>
          <FormInput
            value={this.state.email}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
          <ApolloConsumer>
            {client => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 20,
                    marginTop: 20,
                    borderWidth: 1,
                    width: 200,
                    alignSelf: "center"
                  }}
                  onPress={async () => {
                    this.setState({ error: "" });
                    try {
                      const { data } = await client.query({
                        query: USER,
                        variables: {
                          where: {
                            email: this.state.email
                          }
                        }
                      });
                      console.log(data.users.length);
                      if (data.users.length > 0) {
                        await this.setState({
                          emails: [
                            ...this.state.emails,
                            { email: this.state.email }
                          ]
                        });
                        console.log(data.users);
                        await this.setState({
                          names: [...this.state.names, data.users[0].name]
                        });
                        console.log(this.state.email);
                        console.log(this.state.emails);
                      } else {
                        this.setState({
                          error: "No such user with that email"
                        });
                      }
                      this.setState({ email: "" });
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  <Text style={{ textAlign: "center" }}>Add member</Text>
                </TouchableOpacity>
              );
            }}
          </ApolloConsumer>
          <View style={{ alignItems: "center" }}>
            {this.state.names.map(name => <User name={name} />)}
          </View>
        </ScrollView>
        <View style={styles.bottomButtonOuterWrapper}>
          <View style={styles.bottomButtonWrapper}>
            <Mutation mutation={CREATE_GROUP}>
              {createGroup => {
                return (
                  <View>
                    <TouchableOpacity
                      style={styles.addGroupButton}
                      onPress={async () => {
                        try {
                          const myEmail = await AsyncStorage.getItem("email");
                          console.log("MY EMAIL: " + myEmail);
                          const { data } = await createGroup({
                            variables: {
                              data: {
                                name: this.state.name,
                                members: {
                                  connect: [
                                    ...this.state.emails,
                                    { email: myEmail }
                                  ]
                                }
                              }
                            }
                          });
                          this.setState({ name: "", email: "", emails: [] });
                          this.props.navigation.goBack();
                        } catch (e) {
                          console.log(e);
                        }
                      }}
                    >
                      <Text style={styles.addGroupText}>Add group!</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            </Mutation>
            <TouchableOpacity
              style={styles.goBackButton}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Go back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ModalCreateGroup;

const styles = StyleSheet.create({
  goBackButton: {
    padding: 15,
    margin: "auto",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  addGroupButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    margin: "auto",
    backgroundColor: "#5B0000",
    borderRadius: 15
  },
  addGroupText: {
    color: "white"
  },
  bottomButtonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
    width: "60%"
  },
  bottomButtonOuterWrapper: {
    alignItems: "center",
    justifyContent: "center"
  }
});
