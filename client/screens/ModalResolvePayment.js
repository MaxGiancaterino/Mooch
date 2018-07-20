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
import { Mutation } from "react-apollo";

const UPDATE_PAYMENT = gql`
  mutation updatePayment(
    $data: PaymentUpdateInput!
    $where: PaymentWhereUniqueInput!
  ) {
    updatePayment(data: $data, where: $where) {
      id
      name
      cost
    }
  }
`;

const DELETE_PAYMENT = gql`
  mutation deletePayment($where: PaymentWhereUniqueInput!) {
    deletePayment(where: $where) {
      id
      name
      cost
    }
  }
`;

class ModalResolvePayment extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, marginTop: 50 }}>
          <Text style={{ fontSize: 24, textAlign: "center" }}>
            {" "}
            You are owed: {this.props.navigation.state.params.cost}
          </Text>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 50
          }}
        >
          <Mutation mutation={DELETE_PAYMENT}>
            {deletePayment => {
              return (
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    try {
                      const email = await AsyncStorage.getItem("email");
                      const { data } = await deletePayment({
                        variables: {
                          where: {
                            id: this.props.navigation.state.params.paymentId
                          }
                        }
                      });
                      this.props.navigation.goBack();
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  <Text>Resolve debt</Text>
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

export default ModalResolvePayment;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    marginRight: 30,
    borderWidth: 1
  }
});
