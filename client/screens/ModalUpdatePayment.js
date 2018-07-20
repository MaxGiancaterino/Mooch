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
        <ScrollView style={{ flex: 1, marginTop: 80 }}>
          <FormLabel>Amount in debt</FormLabel>
          <FormInput
            value={this.state.cost.toString()}
            onChangeText={text => {
              this.setState({ cost: text });
            }}
          />
        </ScrollView>
        <View style={styles.bottomButtonOuterWrapper}>
          <View style={styles.bottomButtonWrapper}>
            <Mutation mutation={UPDATE_PAYMENT}>
              {updatePayment => {
                return (
                  <TouchableOpacity
                    style={styles.declareDebtButton}
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
                                        email: this.props.navigation.state
                                          .params.payer.email
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
                    <Text style={styles.declareDebtText}>Declare Debt</Text>
                  </TouchableOpacity>
                );
              }}
            </Mutation>
            <TouchableOpacity
              style={styles.goBackButton}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Go back!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default ModalUpdatePayment;

const styles = StyleSheet.create({
  goBackButton: {
    padding: 15,
    margin: "auto",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  declareDebtButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    margin: "auto",
    backgroundColor: "#5B0000",
    borderRadius: 15
  },
  declareDebtText: {
    color: "white"
  },
  bottomButtonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
    width: "60%"
  },
  bottomButtonOuterWrapper: {
    alignItems: "center",
    justifyContent: "center"
  }
});
