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

import Payment from "../components/Payment";

import { EvilIcons } from "@expo/vector-icons";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_PAYMENTS = gql`
  query payments($id: ID!) {
    payments(id: $id) {
      id
      name
      payments {
        name
        id
        cost
        payer {
          email
        }
        debts {
          creditor {
            name
            email
          }
          debtor {
            name
            email
          }
          amount
        }
      }
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
          <View style={styles.groupsViewWrapper}>
            <Query
              query={GET_PAYMENTS}
              pollInterval={300}
              variables={{ id: this.props.navigation.state.params.id }}
            >
              {({ loading, error, data }) => {
                console.log("ID: " + this.props.navigation.state.params.id);
                if (loading)
                  return <Text style={styles.loadingText}>Loading...</Text>;
                if (error) {
                  console.log(error);
                  return <Text>"oops"</Text>;
                }
                if (!data) return <Text>"No data"</Text>;
                if (!data.payments) return <Text>No payments</Text>;
                console.log(data);
                return data.payments.payments.map(payment => {
                  return (
                    <Payment
                      key={payment.id}
                      name={payment.name}
                      id={payment.id}
                      cost={payment.cost}
                      payer={payment.payer}
                      debts={payment.debts}
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
