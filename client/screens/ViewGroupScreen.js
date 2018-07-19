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
import User from "../components/User";

import { EvilIcons } from "@expo/vector-icons";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_MEMBERS = gql`
  query group($where: GroupWhereUniqueInput!) {
    group(where: $where) {
      name
      members {
        id
        name
      }
    }
  }
`;

export default class ViewGroupsScreen extends React.Component {
  static navigationOptions = {
    title: "Group members:"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Query
          variables={{
            where: {
              id: this.props.navigation.state.params.id
            }
          }}
          query={GET_MEMBERS}
        >
          {({ loading, error, data }) => {
            if (loading) return <Text>"loading..."</Text>;
            if (error) {
              console.log(error);
              return <Text>"oops"</Text>;
            }
            if (!data) return <Text>"no data"</Text>;
            if (!data.group.members) return <Text>"no members"</Text>;
            return data.group.members.map(member => {
              return <User key={member.id} name={member.name} />;
            });
          }}
        </Query>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
