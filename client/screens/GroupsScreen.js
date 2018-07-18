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
import Group from "../components/Group";

import { EvilIcons } from "@expo/vector-icons";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_GROUPS = gql`
  query groups {
    groups {
      id
      name
    }
  }
`;

export default class GroupsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "groups",
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate("ModalCreateGroup")}
        >
          <EvilIcons name="plus" size={32} />
        </TouchableOpacity>
      ),
      tabBarLabel: "Groups",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-link${focused ? "" : "-outline"}`
              : "md-link"
          }
        />
      )
    };
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Query query={GET_GROUPS}>
          {({ loading, error, data }) => {
            if (loading) return <Text>"loading..."</Text>;
            if (error) {
              console.log(error);
              return <Text>"oops"</Text>;
            }
            if (!data) return <Text>"no data"</Text>;
            if (!data.groups) return <Text>"no users"</Text>;
            return data.groups.map(group => {
              return (
                <Group
                  key={group.id}
                  name={group.name}
                  id={group.id}
                  navigation={this.props.navigation}
                />
              );
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
