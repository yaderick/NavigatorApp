'use strict';

import React, {  
  Component,  
  StyleSheet,
  Text,
  Image,
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
        <View style={styles.container}>
          <Image  resizeMode='contain' source={require('./img/bg.png')} >
            <View style={styles.imageOverlay}>        
              <Text style={{color: '#fff', fontSize: 32,}}> Welcome Mate </Text>
            </View>
          </Image>			
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

module.exports = SplashPage;

