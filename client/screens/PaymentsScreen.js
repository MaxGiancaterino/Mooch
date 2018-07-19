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

export default class PaymentsScreen extends React.Component {
  componentDidMount() {
    console.log("MOUNTING");
    this.props.navigation.setParams({
      rerender: "TEST"
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Payments",
      headerRight: (
        <TouchableOpacity
          style={styles.addGroupButton}
          onPress={() => navigation.navigate("ModalCreatePayment")}
        >
          <EvilIcons name="plus" size={32} />
        </TouchableOpacity>
      ),
      tabBarLabel: "Payments",
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
          <Text>Payments Page</Text>
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
  loadingText: {
    marginTop: 50,
    fontSize: 28,
    fontFamily: "AvenirNext-Medium"
  },
  groupsViewWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  }
});
