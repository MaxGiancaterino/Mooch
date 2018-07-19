import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
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
      <View style={styles.container}>
        <View style={styles.form}>
          <FormLabel labelStyle={styles.label}>Name of new group</FormLabel>
          <FormInput
            value={this.state.name}
            onChangeText={text => {
              this.setState({ name: text });
            }}
          />
          <FormLabel labelStyle={styles.label}>Add member</FormLabel>
          <FormInput
            value={this.state.email}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
        </View>
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
              if (loading)
                return <Text style={styles.loadingText}>"Loading..."</Text>;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 28
  },
  label: {
    color: "#5B0000",
    fontSize: 14
  },
  form: {
    marginTop: 20,
    alignItems: "center"
  }
});
