import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_USERS = gql`
  query users($where: UserWhereInput) {
    users(where: $where) {
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
      <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
        <FormLabel>Name</FormLabel>
        <FormInput
          value={this.state.name}
          onChangeText={text => {
            this.setState({ name: text });
          }}
        />
        <FormLabel>Add member</FormLabel>
        <FormInput
          value={this.state.email}
          onChangeText={text => {
            this.setState({ email: text });
          }}
        />
        <TouchableOpacity
          onPress={() =>
            this.setState({ email: [...this.state.emails, this.state.email] })
          }
        >
          <Text>Add member</Text>
        </TouchableOpacity>

        <TouchableOpacity
        // onPress={() => ()}
        >
          <Text>Add group!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Go back!</Text>
        </TouchableOpacity>
        <View>
          <Query query={GET_USERS}>
            {({ loading, error, data }) => {
              if (loading) return <Text>"loading..."</Text>;
              if (error) return <Text>"oops"</Text>;
              if (!data) return <Text>"no data"</Text>;
              if (!data.users) return <Text>"no users"</Text>;
              return data.users.map(user => {
                return (
                  <View>
                    <Text>{user.name}</Text>
                  </View>
                );
              });
            }}
          </Query>
        </View>
      </View>
    );
  }
}

export default ModalCreateGroup;
