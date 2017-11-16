import React, { Component } from 'react';
import {
  AppRegistry,
  NetInfo,
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class register extends Component {
	
	   static navigationOptions= ({navigation}) =>({
		  title: 'Register',	
		  headerRight:	
		  <TouchableOpacity
			onPress={() => navigation.navigate('Home')}
			style={{margin:10,backgroundColor:'orange',padding:10}}>
			<Text style={{color:'#ffffff'}}>Home</Text>
		  </TouchableOpacity>
		
	});  	
		  
	constructor(props){
		super(props)
		this.state={
			userName:'',
			userEmail:'', 
			userPassword:''				
		}
	}
	
	navigateBack = () =>{
		const { navigate } = this.props.navigation;
                          this.props.navigation.navigate('Login')
	}
	userRegister = () =>{
		//alert('ok'); // version 0.48
		
		const {userName} = this.state;
		const {userEmail} = this.state;
		const {userPassword} = this.state;
		
		
		fetch('http://hardeepcoder.com/react/register.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				name: userName,
				email: userEmail,
				password: userPassword,
			})
			
		})
		.then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
				this.props.navigation.navigate('Login')
			})
			.catch((error)=>{
				console.error(error);
			});
		
	}
	
  render() {
    return (
	<View style={styles.container}>
      
	  <TextInput
	  placeholder="Enter Name"
	  style={{width:250,margin:10, borderColor:"white", backgroundColor:"white", 
	  borderWidth:1, borderRadius: 5}}	
	  underlineColorAndroid="transparent"
  onChangeText= {userName => this.setState({userName})}
	  
	  />
	  
	  <TextInput
	  placeholder="Enter Email"
	  style={{width:250,margin:10, borderColor:"white", backgroundColor:"white", 
	  borderWidth:1, borderRadius: 5}}	
	  underlineColorAndroid="transparent"
	  onChangeText= {userEmail => this.setState({userEmail})}
	  />
	  
	  <TextInput
	  placeholder="Enter Password"
	  style={{width:250,margin:10, borderColor:"white", backgroundColor:"white", 
	  borderWidth:1, borderRadius: 5}}	
	  underlineColorAndroid="transparent"
	  onChangeText= {userPassword => this.setState({userPassword})}
	  />
	  
	  <TouchableOpacity
		onPress={this.userRegister}
		style={{width:250,padding:10, marginTop:10, backgroundColor:'orange',
		alignItems:'center'}}>
	  <Text style={{color:'#fff'}}>Register</Text>
	  </TouchableOpacity>

	  <TouchableOpacity
		onPress={this.navigateBack}
		style={{width:250,padding:10, marginTop: 10, backgroundColor:'orange',
		alignItems:'center'}}>
	  <Text style={{color:'#fff'}}>Back</Text>
	  </TouchableOpacity>
	  
	  
     </View>
  
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('register', () => register);
