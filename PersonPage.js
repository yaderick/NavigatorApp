'use strict';

var React = require('react-native');
var {
	StyleSheet,
	Component,
	View,
	Text,
	Navigator,
	TouchableHighlight,
	TouchableOpacity
} = React;

class PersonPage extends Component {
	render() {
		return (
			<Navigator
				renderScene={this.renderScene.bind(this)}
				navigator={this.props.navigator}
				navigationBar={
					<Navigator.NavigationBar style={{backgroundColor:'#246dd5'}}
					routeMapper={NavigationBarRouteMapper} />
			} />				
		);
	}
	renderScene(route, navigator) {
		return(
			<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<TouchableOpacity onPress={this.goNext.bind(this)}>
					<Text>Press Me</Text>
				</TouchableOpacity>
			</View>
		);
	}
	goNext() {
		this.props.navigator.push({
			id:'NoNavigationPage',
			sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
		});
	}
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.push({id: 'unknown'})}>
        <Text style={{color: 'white', margin: 10,}}>
          Help
        </Text>
      </TouchableOpacity>
    );
  },
  Title(route, navigator, index, nextState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          PersonPage
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = PersonPage;
