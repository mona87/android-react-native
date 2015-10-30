import React from 'react-native';
import Main from './App/components/Main';

let  {
	AppRegistry,
	StyleSheet,
	Text,
	Navigator,
	View,
	ToolbarAndroid
} = React;

let styles =  StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#111111',
	},
	toolbar: {
  	  	backgroundColor: '#e9eaed',
    	height: 56,
  },
});

let AwesomeProject = React.createClass({
	onActionSelected: function(position){
		console.log(position);
		
	},
	render: function() {
		return (
		<Navigator
		 navigationBar = {<ToolbarAndroid style={styles.toolbar}  
        					title="AwesomeApp" 
        					actions={
        						[{title: 'Back',  show: 'always'},
        						{title: 'Settings', show: 'always'}]}
        					onActionSelected={this.onActionSelected}/>}
        initialRoute={{name: 'Index', title: 'Github Notetaker', component: Main}}
        renderScene={(route, navigator) => {
          if(route.component) {	 
            return React.createElement(route.component, { navigator, ...route.passProps })
          }
        }}

      ></Navigator>

		   
		)
}	
});





AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
