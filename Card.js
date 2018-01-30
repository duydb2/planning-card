import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ children }) => (<View style={styles.container}><View style={styles.innerContainer}><Text style={styles.text}>{children}</Text></View></View>);

const styles = StyleSheet.create({ container: {
  flex: 1,
  paddingTop: 32,
  paddingBottom: 32,
  paddingLeft: 20,
  paddingRight: 20,
  backgroundColor: 'blue'
},
innerContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 8,
  borderRadius: 16,
  borderColor: 'rgb(10, 10, 129)',
  backgroundColor: 'white'
},
text: {
  fontSize: 250,
  fontWeight: 'bold',
} });

export default Card;