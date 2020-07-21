import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import LifecycleComponent from './LifecycleComponent';
export default class setup extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.test}>Hello react-native</Text>
        <Text style={styles.test}>Hello react-native</Text>
        <LifecycleComponent />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    fontSize: 50,
  },
});
