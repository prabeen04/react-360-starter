import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

class About extends React.Component {
  render() {
    return (
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Something about us!!!!
          </Text>
        </View>
    );
  }
};

export default About;

const styles = StyleSheet.create({
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    transform: [{translate: [-20, 100, -300]}]
  },
  greeting: {
    fontSize: 30,
  },
});
