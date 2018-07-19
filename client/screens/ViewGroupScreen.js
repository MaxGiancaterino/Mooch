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
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Groups",
      headerRight: (
        <TouchableOpacity
          style={styles.addPaymentButton}
          onPress={() => navigation.navigate("ModalCreatePayment")}
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
        <Text style={styles.membersText}>Members</Text>
        <ScrollView>
          <Query
            variables={{
              where: {
                id: this.props.navigation.state.params.id
              }
            }}
            query={GET_MEMBERS}
          >
            {({ loading, error, data }) => {
              if (loading)
                return <Text style={styles.loadingText}>"Loading..."</Text>;
              if (error) {
                console.log(error);
                return <Text>"oops"</Text>;
              }
              if (!data) return <Text>"no data"</Text>;
              if (!data.group.members) return <Text>"no members"</Text>;
              return data.group.members.map(member => {
                return (
                  <View>
                    <User key={member.id} name={member.name} />
                  </View>
                );
              });
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    flexWrap: "wrap"
  },
  addPaymentButton: {
    marginRight: 10
  },
  loadingText: {
    fontSize: 28,
    fontFamily: "AvenirNext-Medium"
  },
  membersText: {
    fontSize: 42,
    marginBottom: 20,
    marginTop: 20,
    fontFamily: "AvenirNext-Medium"
  }
});
