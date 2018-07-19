import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
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
class ModalCreatePayment extends React.Component {
  state = {
    name: "",
    cost: 0,
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
            value={this.state.cost}
            onChangeText={text => {
              this.setState({ cost: text });
            }}
          />
          <TouchableOpacity
            style={{
              padding: 20,
              marginTop: 20,
              borderWidth: 1,
              width: 200,
              alignSelf: "center"
            }}
            onPress={async () => {
              await this.setState({
                emails: [...this.state.emails, { email: this.state.email }]
              });
            }}
          >
            <Text style={{ textAlign: "center" }}>Add member</Text>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 50
          }}
        >
          <Mutation mutation={CREATE_PAYMENT}>
            {createPayment => {
              return (
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    try {
                      const { data } = await createPayment({
                        variables: {
                          data: {
                            name: this.state.name,
                            cost: this.state.cost
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
