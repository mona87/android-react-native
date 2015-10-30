import React from 'react-native';
import Profile from './Profile';
import api from '../utils/api';
import Repos from './Repos';

let {
	Text,
	StyleSheet,
	View,
	TouchableHighlight,
	Image
} = React;

let styles = StyleSheet.create({
	container: {
		marginTop: 65,
		flex: 1
	},
	image: {
		height: 350,
	},
	buttonText: {
		fontSize: 24,
		color: 'white',
		alignSelf: 'center'
	  }
});

class Dashboard extends React.Component{
	makeBackground(btn){
		var obj = {
			flexDirection: 'row',
			alignSelf: 'stretch',
			justifyContent: 'center',
			flex: 1
		}
	
		if(btn === 0){
			obj.backgroundColor = '#48BBEC';
		}else if(btn === 1){
			obj.backgroundColor = '#e77aae';
		}else{
			obj.backgroundColor = '#758BF4';
		}
		return obj;
	}
	goToProfile(){
		this.props.navigator.push({
		  component: Profile,
		  title: 'Profile Page',
		  passProps: {userInfo: this.props.userInfo}
		});
	}
	goToRepos(){
		console.log(this.props.userInfo.login)
		api.getRepos(this.props.userInfo.login)
		  .then((res) => {
		  	console.log(res);
			this.props.navigator.push({
			  component: Repos,
			  title: 'Repos Page',
			  passProps: {
				userInfo: this.props.userInfo,
				repos: res
			  }
			});
		});
	}
	gotToNotes(){
		console.log('going to notes');
	}
	render(){
		return(
			<View style = {styles.container}>
			<Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
				<TouchableHighlight
					style={this.makeBackground(0)}
					onPress={this.goToProfile.bind(this)}
					underlayColor='#88d4f5'>
					<Text style={styles.buttonText}>View Profile</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={this.makeBackground(1)}
					onPress={this.goToRepos.bind(this)}
					underlayColor='#e39ebf'>
					<Text style={styles.buttonText}>View Repos</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={this.makeBackground(2)}
					onPress={this.goToProfile.bind(this)}
					underlayColor='#9baaf3'>
					<Text style={styles.buttonText}>View Notes</Text>
				</TouchableHighlight>								
			</View>
		)
	}

}

module.exports = Dashboard;