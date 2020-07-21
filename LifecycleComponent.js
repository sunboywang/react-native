import React from 'react';
import {Text, View} from 'react-native';

export default class LifecycleComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('-----constructor-------');
  }

  componentWillMount() {
    console.log('-----componentWillMount-------');
  }

  render() {
    console.log('-----render-------');
    return (
      <View>
        <Text>生命周期</Text>
      </View>
    );
  }

  componentDidMount() {
    console.log('-----componentDidMount-------');
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('-----componentWillReceiveProps-------');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('-----shouldComponentUpdate-------');
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('-----componentWillUpdate-------');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('-----componentDidUpdate-------');
  }

  componentWillUnmount() {
    console.log('-----componentWillUnmount-------');
  }
}
