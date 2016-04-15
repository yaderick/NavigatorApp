'use strict';

var React = require('react-native');
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
					<Navigator.NavigationBar  style={{backgroundColor: '#246dd5', alignItems: 'center'}} 
						routeMapper={NavigationBarRouteMapper} />
			} />
		);
	}
	renderScene (route, navigator) {
		return (
			<View style={styles.container}>
	          <Image  resizeMode='contain' source={require('./img/bg.png')} >
	            <View style={styles.imageOverlay}>   
	            	<TouchableOpacity onPress={this.gotoNext.bind(this)}>
						<Text>Press Me</Text>
					</TouchableOpacity>     
	              	<Text style={{color: '#fff', fontSize: 32,}}> Welcome Mate </Text>
	            </View>
	          </Image>			
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
		/*return (
			<TouchableOpacity style={{flex:1, justifyContent: 'center'}}>
				<Text style={{color: 'white', margin:10, fontSize: 16}}>Back</Text>
			</TouchableOpacity>
		);*/
	},
	RightButton(route, navigator, index, navState) {
		return (
			<TouchableOpacity style={{flex:1, justifyContent: 'center'}}>
				<Text style={{color: 'white', margin:10, fontSize: 16}}>Skip</Text>				
			</TouchableOpacity>
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
  container: {
    position: 'relative',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'    
  },
  imageOverlay: {
    flex: 1,
    position:'absolute',
    //zIndex:1,
    backgroundColor:'rgba(0,0,0,0.2)',
    alignItems: 'stretch',
    justifyContent: 'center'    
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,    
  }
});

module.exports = LoginPage;