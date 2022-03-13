import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Center from "../Components/Center";

const SuccessScreen = ({ navigation: { navigate } }) => {
return (
  <Center>
  <Text>Your order has been placed successfully !!! Our team will get back to you as soon as possible</Text>
      <Button
        type="clear"
        title="Shop more.."
        onPress={() => navigate("Food Home Page")}
      />
    </Center>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({});
