'use strict';

import React, {  
  Component,  
  Text,
  View,  
} from 'react-native';

class SplashPage extends Component {
	  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'LoginPage',
      });
    }, 1000);
  }
	render() {
		return (
			<View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
				<Text style={{color: '#fff', fontSize: 32,}}>Hello World!</Text>
			</View>
		);
	}
}

module.exports = SplashPage;

