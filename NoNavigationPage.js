'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
} = React;

class NoNavigationPage extends Component {
  render() {    
    var navigator = this.props.navigator;
    return (
      <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => navigator.pop()}>
          <Text style={{color: 'yellow'}}>The End!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

module.exports = NoNavigationPage;