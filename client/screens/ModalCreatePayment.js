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
        <ScrollView style={{ flex: 1, marginTop: 50 }}>
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 50
          }}
        >
          <Mutation mutation={UPDATE_GROUP}>
            {updateGroup => {
              return (
                <TouchableOpacity
                  style={styles.button}
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
                          where: { id: this.props.navigation.state.params.id }
                        }
                      });
                      this.setState({ name: "", cost: 0 });
                      this.props.navigation.goBack();
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  <Text>Add payment!</Text>
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

export default ModalCreatePayment;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    marginRight: 30,
    borderWidth: 1
  }
});
