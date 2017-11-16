import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { StackNavigator,DrawerNavigator  } from 'react-navigation';

import HomeScreen from './home';
import Products from './products2';
import Menu from  './menu';
import Login from './login';
import Register from './register';
import Profile from './profile';

const myDrawer = DrawerNavigator({
	Login: { screen: Login },
	Home: { screen: HomeScreen },
	Products: { screen: Products },
	Register: {screen: Register},
	Profile: {screen: Profile}	
},
{
	contentComponent: props => <Menu {...props} />
});

const nativeShop = StackNavigator({
	Login: { screen: myDrawer },
	
 });
export default nativeShop;