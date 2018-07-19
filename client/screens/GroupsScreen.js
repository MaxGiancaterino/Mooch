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
  constructor(props) {
    super(props);
    this.updateGroups = this.updateGroups.bind(this);
    this.props.navigation.setParams({
      rerender: "TEST"
    });
  }

  componentDidMount() {
    console.log("MOUNTING");
    this.props.navigation.setParams({
      rerender: "TEST"
    });
  }

  updateGroups() {
    console.log("FORCING UPDATE");
    this.forceUpdate();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "groups",
      headerRight: (
        <TouchableOpacity
          style={styles.addGroupButton}
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
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.groupsViewWrapper}>
            <Query query={GET_GROUPS}>
              {({ loading, error, data }) => {
                if (loading)
                  return <Text style={styles.loadingText}>"loading..."</Text>;
                if (error) {
                  console.log(error);
                  return <Text>"oops"</Text>;
                }
                if (!data) return <Text>"No data"</Text>;
                if (!data.groups) return <Text>"No users"</Text>;
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
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollView: {
    flex: 1
  },
  addGroupButton: {
    marginRight: 10
  },
  groupsViewWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  }
});
