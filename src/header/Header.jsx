import React, {useState} from 'react';
import {ImageBackground, Text, View, Switch} from 'react-native';
import {styles} from './Headerstyle';
import Selected from '../../store/Store';
export default function Header() {
  const {darkmode, setdarkmode} = Selected();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    if (darkmode == false) {
      setdarkmode(true);
    } else {
      setdarkmode(false);
    }
    console.log(darkmode);
    setIsEnabled(previousState => !previousState);
  };
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/bg.jpg')}
          resizeMode="cover"
          style={styles.image}>
          <View style={[styles.textCointainer]}>
            <Text style={styles.discover}>Discover Your Dream Trip</Text>
            <Text style={styles.adventure}>Adventure awaits you</Text>
          </View>
        </ImageBackground>
        <View style={styles.switchContainer}>
          <Text
            style={[styles.switchText, {color: darkmode ? 'black' : 'white'}]}>
            Dark Mode
          </Text>
          <Switch
            style={styles.switch}
            trackColor={{false: '#cecfd1', true: '#b98cea'}}
            thumbColor={isEnabled ? '#5f00e9' : '#fff'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </>
  );
}
