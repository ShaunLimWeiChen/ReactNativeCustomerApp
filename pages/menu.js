import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet
,Button,TouchableOpacity,StatusBar,Image, TouchableHighlight } from 'react-native';

export default class menu extends Component{
static navigationOptions= ({navigation}) =>({
		  title: 'Side Menu',	
	});  
  
	render(){
		const { navigate } = this.props.navigation;
		return(
	  <View style={styles.container}>	
   
      <Text style={styles.pageName}>Menu </Text>
	  <Button
	  onPress={() => navigate('Home')}
	  color="black" 
	  title="Home"
	  />
	  
	    <Button
	  onPress={() => navigate('Products2')}
	  color="black"
	  title="Products"
	  />

      </View>
		);
	}
}
const styles = StyleSheet.create({
	pageName:{
		margin:10,fontWeight:'bold',
		color:'white', textAlign:'center'
	},
	container:{
		backgroundColor:'black'
	}
});


AppRegistry.registerComponent('menu', () => menu);
