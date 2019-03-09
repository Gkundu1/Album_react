/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App=()=>(
    <View style={{flex:1}}>
        <Header headerText={'Albums Demo'}/>
        <AlbumList />
    </View>
);

AppRegistry.registerComponent(appName, () => App);
