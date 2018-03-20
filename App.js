import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import MenuItem from './src/comp/MenuItem';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
          source={require ('./src/img/bg.jpg')}
          style={styles.container}>

          <View style={styles.overlayContainer}>

            <View style={styles.top}>
                <Text style={styles.header}>M E N U</Text>
            </View>

            <View style={styles.menuContainer}>
                <MenuItem itemImage={require('./src/menu/fb.png')} />
                <MenuItem itemImage={require('./src/menu/ig.png')} />
                <MenuItem itemImage={require('./src/menu/play.png')} />
                <MenuItem itemImage={require('./src/menu/twit.png')} />
                <MenuItem itemImage={require('./src/menu/WA.png')} />
                <MenuItem itemImage={require('./src/menu/youtube.png')} />
            </View>

          </View>

      </ImageBackground>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '50%',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)'
  },
  top: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)'
  },
  menuContainer: {
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
