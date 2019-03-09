import React, { Component } from 'react';
import { StyleSheet, View,ActivityIndicator } from 'react-native';

const Loader =(props)=>{
    return(
      <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#00ff00" animating={props.loadStatus} />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop:10,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  });

  export default Loader;