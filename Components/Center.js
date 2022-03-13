import { StyleSheet, View } from 'react-native';
import React from 'react';

const Center = ({children}) => {
  return (
    <View style={styles.container}>{children}</View>
  );
};

export default Center;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: 10,
        paddingTop: 10,
    }
});
