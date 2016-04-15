'use strict';

var React = require('react-native');
var {
	StyleSheet,
	Component,
	View,
	Text,
	Navigator,
	TouchableOpacity,
	TouchableHighlight,
} = React;

class LoginPage extends Component {
	render () {
		return (
			<Navigator 
				renderScene={this.renderScene.bind(this)}
				navigationBar= {
					<Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}} 
						routeMapper={NavigationBarRouteMapper} />
			} />
		);
	}
	renderScene (route, navigator) {
		return (
			<View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>				
				<TouchableHighlight
				  onPress={this.gotoNext.bind(this)}>
				  <Text style={{color:'red'}}>Press Me</Text>
				</TouchableHighlight>
			</View>
		);
	}
	gotoNext() {
		this.props.navigator.push({
			id: 'MainPage',
			name:'index'				
		});
	}
}

var NavigationBarRouteMapper = {
	LeftButton(route, navigator, index, navState) {		
		return (
			<TouchableOpacity style={{flex:1, justifyContent: 'center'}}>
				<Text style={{color: 'white', margin:10, fontSize: 16}}>Back</Text>
			</TouchableOpacity>
		);
	},
	RightButton(route, navigator, index, navState) {
		return (
			<TouchableOpacity style={{flex:1, justifyContent: 'center'}}>
				<Text style={{color: 'white', margin:10, fontSize: 16}}>Next</Text>
				
			</TouchableOpacity>
		);
	},
	Title (route, navigator, index, navState) {
		return (
			<View style={{width: 100, textAlign: 'center', flex:1, justifyContent: 'center'}}>
				<TouchableOpacity style={{flex:1, justifyContent: 'center'}}>
					<Text style={{color: 'white', margin:10, fontSize: 16}}>Login Page</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

module.exports = LoginPage;