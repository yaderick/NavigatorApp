/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} = React;

//pages
var SplashPage = require('./SplashPage');
var LoginPage = require('./LoginPage');
var MainPage = require('./MainPage');
var PersonPage = require('./PersonPage');
var NoNavigationPage = require('./NoNavigationPage');


class App extends Component {  
  render() {
      return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}                    
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage navigator={navigator} />          
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage navigator={navigator} />
      );
    }    
    if (routeId === 'NoNavigationPage') {
      return (
        <NoNavigationPage navigator={navigator} />
      );
    }    
    return this.noRoute(navigator);
  }
  noRoute(navigator) {
    return (
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
          <TouchableOpacity style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}} onPress={() => navigator.pop()}>
            <Text style={{color: 'red', fontWeight: 'bold', textAlign: 'center' }}>No Route or Default Screen</Text>
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NavigatorApp', () => App);
