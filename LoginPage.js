'use strict';

var React = require('react-native');
var Animatable = require('react-native-animatable');
var FaIcon = require('react-native-vector-icons/FontAwesome');
var MIcon = require('react-native-vector-icons/MaterialIcons');

var {
	StyleSheet,
	Component,
	View,
	Text,
	Image,
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
					<Navigator.NavigationBar  style={{backgroundColor: '#303F9F', alignItems: 'center'}} 
						routeMapper={NavigationBarRouteMapper} />
			} />
		);
	}
	renderScene (route, navigator) {
		return (				          
	            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>   
	            	<Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
	            	<TouchableOpacity onPress={this.gotoNext.bind(this)}>						
						<FaIcon.Button name="facebook" backgroundColor="#3b5998">
    						Login with Facebook
  						</FaIcon.Button>
					</TouchableOpacity>	              	
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
	LeftButton(route, navigator, index, navState) {},
	RightButton(route, navigator, index, navState) { 
		return (
			<TouchableHighlight style={{flex:1, justifyContent: 'center'}}>				
				<MIcon name="chevron-right" size={30} color="#fff" /> 						
			</TouchableHighlight>
		);
	},
	Title (route, navigator, index, navState) {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity style={{flex:1, justifyContent: 'center'}}>
					<Text style={{color: 'white', textAlign: 'center' , margin:10, fontSize: 16}}>Login Page</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({  
  imageOverlay: {
    flex: 1,        
    alignItems: 'center',
    justifyContent: 'center'    
  }
});

module.exports = LoginPage;