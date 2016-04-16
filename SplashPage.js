'use strict';

import React, {  
  Component,  
  StyleSheet,
  Text,
  Image,
  View,  
} from 'react-native';
var Animatable = require('react-native-animatable');
var EIcon = require('react-native-vector-icons/EvilIcons');

class SplashPage extends Component {
	  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'LoginPage',
      });
    }, 10000);
  }
	render() {
		return (
           <Image style={styles.bgContainer}  resizeMode='cover' source={require('./img/bg.png')} >
              <Animatable.View animation="zoomInUp" style={styles.imageOverlay} >
                <EIcon name="camera" size={150} color="#fff" style={{marginBottom: 25}} />
                <Text style={{color: '#fff', fontSize: 32,}}>Avestagram</Text>                                
              </Animatable.View>
          </Image>      
		);
	}
}

const styles = StyleSheet.create({
   bgContainer: {    
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null    
  },
  imageOverlay: {
    flex: 1,          
    backgroundColor:'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }  
});

module.exports = SplashPage;

