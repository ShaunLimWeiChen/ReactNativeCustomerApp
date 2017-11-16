import React, { Component, PropTypes } from 'react';
import { AppRegistry,View,Text,
StyleSheet,FlatList,Image,StatusBar,TouchableOpacity,Button } from 'react-native';
import Drawer from 'react-native-drawer';
import SideMenu from './SideMenu';

export default class products extends Component{
	static navigationOptions = ({navigation}) =>({
		  title: 'Products',			
		headerRight:<TouchableOpacity onPress={() => navigation.navigate("Home")}
		style={{backgroundColor:'orange', margin:10,padding:10}}>
		<Text style={{color:'#fff'}}>Home</Text></TouchableOpacity>
	});
			  
	
	state={
		data:[]
	};
	fetchData = async() =>{
		const { params } = this.props.navigation.state;
		const response =  await fetch('http://hardeepcoder.com/laravel/easyshop/api/products/' + params.id);
		const products = await response.json(); // products have array data
		this.setState({data: products}); // filled data with dynamic array
	};
	componentDidMount(){
		this.fetchData();
	}

	constructor(){
        super();
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
    }

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

	render(){

		 const { params } = this.props.navigation.state;
		return(
		 <View style={styles.container}>
		<Text style={styles.pageName}>{params.cat}</Text>
		  <FlatList
		  data={this.state.data}
		  keyExtractor={(x,i) => i}
		  renderItem={({item})=>
		  <View style={styles.productBox}>
		  <Image style={{height:150, width:'100%'}} source={{uri:item.pro_img}} />
		   <Text style= {styles.price}>${item.pro_price}</Text>
		  <Text style={styles.proName}>{item.pro_name}</Text>		  	
		  </View>
		  }
		  />
	
		</View>
		);
	}



}
const styles = StyleSheet.create({
	container:{
		 flex: 1,
        flexDirection: 'column',
		justifyContent: 'center',

	},
	 drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3},
	pageName:{
		margin:10,fontWeight:'bold',
		color:'#000', textAlign:'center', fontSize:50
	},
	productBox:{
		padding:5,margin:10,borderColor:'transparent',borderBottomWidth:1, shadowColor: '#000', borderRadius: 25,
		shadowOffset: { width: 0, height: 2 }
	},
	price:{
		padding:5, fontSize:50, color:'orange',fontWeight:'bold',textAlign:'center', borderColor: 'white', backgroundColor:'white', borderColor:'white'
	},
	proName:{
		padding:5,color:'black',fontSize: 20, textAlign:'center', backgroundColor:'white'
	}
})
AppRegistry.registerComponent('products', () => products);
