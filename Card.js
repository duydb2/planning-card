import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

const Card = ({ children }) => (
  <View style={styles.container}>
    <LinearGradient colors={['white', 'rgb(208, 226, 228)']} style={styles.innerContainer}>
      <View style={styles.circle}>
        <Text style={styles.circleText}>{children}</Text>
      </View>
      <Text style={styles.text}>{children}</Text>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({ container: {
  flex: 1,
  paddingTop: 40,
  paddingBottom: 40,
  paddingLeft: 24,
  paddingRight: 24,
  backgroundColor: 'rgb(66, 122, 130)'
},
innerContainer: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 4,
  borderRadius: 16,
  borderColor: 'rgb(14, 70, 78)'
},
circle: {
  width: 60,
  height: 60,
  borderRadius: 30,
  backgroundColor: 'rgb(1, 46, 52)',
  position: 'absolute',
  top: 4,
  left: 4,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 2,
  borderColor: 'rgb(105, 150, 156)'
},
circleText: {
  color: 'rgb(105, 150, 156)',
  fontSize: 32,
  fontWeight: 'bold'
},
text: {
  fontSize: 240,
  fontWeight: 'bold',
  color: 'rgb(1, 46, 52)'
} });

export default Card;