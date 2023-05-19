import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Card from './shared/card';
import EntryCard from './shared/entryCard';
import MiniCard from './shared/miniCard';
import Button from './shared/button';

const getFonts = () => {
  return Font.loadAsync({
    mochiyBold: require("./newassets/fonts/MochiyPopPOne-Regular.ttf"),
    dongleRegular: require("./newassets/fonts/Dongle-Regular.ttf"),
    dongleBold: require("./newassets/fonts/Dongle-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
	  <View> 
	    <Text>work plz </Text>
	    <View>
	    <Text style={styles.text}> Work </Text> 
	    </View>
	  </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setfontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'mochiyBold'
  },
	text: {
		fontFamily: 'mochiyBold'
	}
});
