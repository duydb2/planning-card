import React, { Component } from 'react';
import { Dimensions } from 'react-native';

import Label from '../Label';

class DynamicLabel extends Component {
  state = {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height
  }

  static defaultProps = {
    factor: 2
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {

  }
}