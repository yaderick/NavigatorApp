'use strict';

var React = require('react-native');
var {
	StyleSheet,
	Component,
	View,
	Text,
	Navigator,
	TouchableOpacity,
	TouchableHighlight
} = React;

class MainPage extends Component {
	render() {
		return (
			<Navigator 
				renderScene={this.renderScene.bind(this)}
				navigator={this.props.navigator}
				navigationBar = {
					<Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
					routeMapper={NavigationBarRouteMapper} />	
			} />				
		);
	}
	renderScene (route, navigator) {
		return (
			 <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        		<TouchableHighlight style={{backgroundColor: 'yellow', padding: 10}}
            		onPress={this.gotoPersonPage.bind(this)}>
          			<Text style={{backgrondColor: 'yellow', color: 'green'}}>Here</Text>
        		</TouchableHighlight>
      		</View>
		);
	}
	gotoPersonPage() {
		this.props.navigator.push ({
			id:'PersonPage'
		});
	}
}

var NavigationBarRouteMapper = {
	LeftButton(route, navigator, index, navState) {
		return (
			<TouchableOpacity style={{flex:1, justifyContent: 'center'}} onPress={() => navigator.parentNavigator.pop()}>
				<Text style={{color: '#fff', margin: 10, fontSize:16}}>Back</Text>
			</TouchableOpacity>
		);
	},
	RightButton(route, navigator, index, navState) {
		return null;
	},
	Title(route, navigator, index, navState) {
		return (
			<TouchableOpacity style={{flex:1, justifyContent: 'center'}}>
				<Text style={{color: '#fff', margin: 10, fontSize:16}}>Main Page</Text>
			</TouchableOpacity>
		);
	}
};

module.exports = MainPage;