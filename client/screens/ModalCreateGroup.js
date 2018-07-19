import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_GROUP = gql`
  mutation createGroup($data: GroupCreateInput!) {
    createGroup(data: $data) {
      id
      name
    }
  }
`;
class ModalCreateGroup extends React.Component {
  state = {
    name: "",
    email: "",
    emails: []
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
          <TouchableOpacity
            style={{
              padding: 20,
              marginTop: 20,
              borderWidth: 1,
              width: 200,
              alignSelf: "center"
            }}
            onPress={async () => {
              await this.setState({
                emails: [...this.state.emails, { email: this.state.email }]
              });
              console.log(this.state.email);
              console.log(this.state.emails);
              this.setState({ email: "" });
            }}
          >
            <Text style={{ textAlign: "center" }}>Add member</Text>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 50
          }}
        >
          <Mutation mutation={CREATE_GROUP}>
            {createGroup => {
              return (
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    try {
                      const { data } = await createGroup({
                        variables: {
                          data: {
                            name: this.state.name,
                            members: {
                              connect: this.state.emails
                            }
                          }
                        }
                      });
                      this.setState({ name: "", email: "", emails: [] });
                      console.log(this.props.navigation.state.params);
                      console.log(
                        "--------------------------------Before---------------------------------"
                      );
                      this.props.navigation.state.params.rerender();
                      console.log(
                        "--------------------------------After---------------------------------"
                      );
                      this.props.navigation.goBack();
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  <Text>Add group!</Text>
                </TouchableOpacity>
              );
            }}
          </Mutation>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text>Go back!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ModalCreateGroup;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    marginRight: 30,
    borderWidth: 1
  }
});
