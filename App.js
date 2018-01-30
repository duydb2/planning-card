import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Card from './Card';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const routes = ['?', '1', '2', '3', '5', '8', '13', '20', '40', '∞'];

const RouteComponents = routes.reduce(function(result, current) {
  result[current] = () => <Card>{current}</Card>;
  return result;
}, {});

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: routes.map(route => ({
      key: route,
      title: route
    })),
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = SceneMap(RouteComponents);

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});