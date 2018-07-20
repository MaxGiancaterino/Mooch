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

class ModalUpdatePayment extends React.Component {
  state = {
    cost: 0
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, marginTop: 50 }}>
          <FormLabel>Amount in debt</FormLabel>
          <FormInput
            value={this.state.cost.toString()}
            onChangeText={text => {
              this.setState({ cost: text });
            }}
          />
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 50
          }}
        >
          <Mutation mutation={UPDATE_PAYMENT}>
            {updatePayment => {
              return (
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    try {
                      const email = await AsyncStorage.getItem("email");
                      const { data } = await updatePayment({
                        variables: {
                          data: {
                            debts: {
                              create: [
                                {
                                  amount: this.state.cost,
                                  debtor: {
                                    connect: {
                                      email
                                    }
                                  },
                                  creditor: {
                                    connect: {
                                      email: this.props.navigation.state.params
                                        .payer.email
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          where: {
                            id: this.props.navigation.state.params.paymentId
                          }
                        }
                      });
                      this.setState({ name: "", cost: 0 });
                      this.props.navigation.goBack();
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  <Text>Declare Debt</Text>
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

export default ModalUpdatePayment;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    marginRight: 30,
    borderWidth: 1
  }
});
