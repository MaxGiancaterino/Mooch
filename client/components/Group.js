import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
class Group extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
        <View>
          <Query query={GET_GROUPS}>
            {({ loading, error, data }) => {
              if (loading) return <Text>"loading..."</Text>;
              if (error) return <Text>"oops"</Text>;
              if (!data) return <Text>"no data"</Text>;
              if (!data.users) return <Text>"no users"</Text>;
              return data.groups.map(user => {
                return (
                  <View>
                    <Text>{user.name}</Text>
                  </View>
                );
              });
            }}
          </Query>
        </View>
      </View>
    );
  }
}

export default Group;
