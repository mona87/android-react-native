import React from 'react-native';

let{
	View,
	WebView,
	StyleSheet
} = React;

let styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f6f6ef',
		flexDirection: 'column'
	},
});


class Web extends React.Component{
	render(){
		console.log('Web')
		return(
			<View style={styles.container}>
				<WebView url={this.props.url} />
			</View>
		)
	}
};

Web.propTypes = {
	url: React.PropTypes.string.isRequired
}
module.exports = Web;