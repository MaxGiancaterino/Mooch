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

const CREATE_PAYMENT = gql`
  mutation createPayment($data: PaymentCreateInput!) {
    createPayment(data: $data) {
      id
      name
      cost
    }
  }
`;

const UPDATE_GROUP = gql`
  mutation updateGroup(
    $data: GroupUpdateInput!
    $where: GroupWhereUniqueInput!
  ) {
    updateGroup(data: $data, where: $where) {
      id
      name
      payments {
        name
      }
    }
  }
`;

class ModalCreatePayment extends React.Component {
  state = {
    name: "",
    cost: 0
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, marginTop: 80 }}>
          <FormLabel>Name of payment</FormLabel>
          <FormInput
            value={this.state.name}
            onChangeText={text => {
              this.setState({ name: text });
            }}
          />
          <FormLabel>Cost</FormLabel>
          <FormInput
            value={this.state.cost.toString()}
            onChangeText={text => {
              this.setState({ cost: text });
            }}
          />
        </ScrollView>
        <View style={styles.bottomButtonOuterWrapper}>
          <View style={styles.bottomButtonWrapper}>
            <Mutation mutation={UPDATE_GROUP}>
              {updateGroup => {
                return (
                  <TouchableOpacity
                    style={styles.addPaymentButton}
                    onPress={async () => {
                      try {
                        const email = await AsyncStorage.getItem("email");
                        const { data } = await updateGroup({
                          variables: {
                            data: {
                              payments: {
                                create: [
                                  {
                                    name: this.state.name,
                                    cost: this.state.cost,
                                    payer: {
                                      connect: { email }
                                    }
                                  }
                                ]
                              }
                            },
                            where: {
                              id: this.props.navigation.state.params.id
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
                    <Text style={styles.addPaymentText}>Add payment!</Text>
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

export default ModalCreatePayment;

const styles = StyleSheet.create({
  goBackButton: {
    padding: 15,
    margin: "auto",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  addPaymentButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    margin: "auto",
    backgroundColor: "#5B0000",
    borderRadius: 15
  },
  addPaymentText: {
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
