import React, { Component } from 'react';
import {
  Image,
  AppRegistry,
  NetInfo,
  StyleSheet,
  Text,
  View,TouchableOpacity,TextInput,Button,Keyboard
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class login extends Component {

	static navigationOptions= ({navigation}) =>({
		  title: 'Login',	
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
			userEmail:'',
			userPassword:''
		}
	}
	
	navigateregister = () =>{
		this.props.navigation.navigate("Register");
	}

	login = () =>{
		const {userEmail,userPassword} = this.state;

		if(userEmail == '' || userPassword == '')
       {
         alert("Email and Password cannot be blank!");
       }
       else
       {
		//here we will send our data to server with fetch	
		fetch('http://hardeepcoder.com/react/login.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: userEmail,
				password: userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
			 if(responseJson == "ok"){
				 // redirect to home page
				 this.props.navigation.navigate("Home");
			 }else{
				 alert("Email/Password is incorrect.");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		
		
		Keyboard.dismiss();
	}
}

	
  render() {
    return (
	<View style={styles.container}>    
	
	<Image
        style={styles.logo}
        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
      />

	<TextInput
	placeholder="Enter Email"
	style={{width:200, margin:10, borderColor:"white", backgroundColor:"white", borderRadius: 5}}
	onChangeText={userEmail => this.setState({userEmail})}
	/>
	
	<TextInput
	placeholder="Enter Password"
	style={{width:200, margin:10, borderColor:"white", backgroundColor:"white", borderRadius: 5}}
	onChangeText={userPassword => this.setState({userPassword})}
	/>
	
	<TouchableOpacity
	onPress={this.login}
	style={{width:200,padding:10,backgroundColor:'orange',alignItems:'center'}}>
	<Text style={{color:'white'}}>Login</Text>
	</TouchableOpacity>

	<TouchableOpacity
	onPress={this.navigateregister}
	style={{width:200,marginTop:10,padding:10,backgroundColor:'orange',alignItems:'center'}}>
	<Text style={{color:'white'}}>Register</Text>
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

});

AppRegistry.registerComponent('login', () => login);
