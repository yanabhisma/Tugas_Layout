import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class MenuItem extends React.Component {
  render() {
    return (
      <View style={styles.MenuItem}>
          <Image
              source={this.props.itemImage}
              style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    MenuItem: {
      width: '33.333333%',
      height: '50%',
      padding: 30,
    },
    image: {
      width: '100%',
      height: '100%',
      opacity: 100,
      borderColor: '#fff',
      borderWidth: 3,
    }
  });
