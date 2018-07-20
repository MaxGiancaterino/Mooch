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
    this.isPayer();
  }
  componentDidUpdate() {
    this.calculateDebt(this.props.debts);
  }
  state = {
    owed: 0,
    debt: 0,
    isPayer: false
  };
  async calculateDebt(debts) {
    //console.log(debts);
    const email = await AsyncStorage.getItem("email");
    //console.log("email: " + email);
    let totalOwed = 0;
    let totalDebt = 0;
    debts.forEach(debt => {
      //console.log("debtor email: " + debt.debtor.email);
      if (debt.debtor.email === email) {
        totalDebt += debt.amount;
        //console.log("AMOUNT: " + debt.amount);
      }
      if (debt.creditor.email === email) {
        totalOwed += debt.amount;
      }
    });
    console.log("RETURNED: " + totalDebt);
    if (this.state.debt !== totalDebt) {
      await this.setState({ debt: totalDebt });
    }
    if (this.state.owed !== totalOwed) {
      await this.setState({ owed: totalOwed });
    }
  }

  async isPayer() {
    console.log();
    const email = await AsyncStorage.getItem("email");
    console.log("stored email: " + email);
    console.log("payer email: " + this.props.payer.email);
    const isPayer = email === this.props.payer.email;
    this.setState({ isPayer });
  }
  render() {
    console.log(this.state.isPayer);
    if (!this.state.isPayer) {
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
            <Text style={styles.nameText}>{this.props.name}</Text>
            <Text style={styles.groupText}>Total: ${this.props.cost}</Text>
            <Text style={styles.groupText}>
              You owe {this.props.payer.name}: ${this.state.debt}
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.push("ModalResolvePayment", {
              paymentId: this.props.id,
              payer: this.props.payer,
              cost: this.state.owed
            })
          }
        >
          <View style={styles.group}>
            <Text style={styles.nameText}>{this.props.name}</Text>
            <Text style={styles.groupText}>Total: ${this.props.cost}</Text>
            <Text style={styles.groupText}>
              You are owed: ${this.state.owed}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
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
    fontSize: 14,
    fontFamily: "Futura",
    color: "white",
    margin: 5
  },
  nameText: {
    fontSize: 18,
    fontFamily: "Futura",
    color: "#FFB800",
    margin: 5
  }
});
