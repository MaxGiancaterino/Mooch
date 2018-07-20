import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

class Payment extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    //console.log("WILL MOUNT");
    this.calculateDebt(this.props.debts);
  }
  componentDidUpdate() {
    this.calculateDebt(this.props.debts);
  }
  state = {
    debt: 0
  };
  async calculateDebt(debts) {
    console.log(debts);
    const email = await AsyncStorage.getItem("email");
    console.log("email: " + email);
    let totalDebt = 0;
    debts.forEach(debt => {
      console.log("debtor email: " + debt.debtor.email);
      if (debt.debtor.email === email) {
        totalDebt += debt.amount;
        console.log("AMOUNT: " + debt.amount);
      }
    });
    console.log("RETURNED: " + totalDebt);
    await this.setState({ debt: totalDebt });
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          this.props.navigation.push("ModalUpdatePayment", {
            paymentId: this.props.id,
            payer: this.props.payer
          })
        }
      >
        <View style={styles.group}>
          <Text style={styles.groupText}>{this.props.name}</Text>
          <Text style={styles.groupText}>Total: ${this.props.cost}</Text>
          <Text style={styles.groupText}>You owe: ${this.state.debt}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Payment;

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "#5B0000",
    width: "40%",
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  groupText: {
    fontSize: 24,
    fontFamily: "Futura",
    color: "white",
    margin: 5
  }
});
