import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
  return (
	<EntryCard>
		<Text>Open up App.js to start working on your app!</Text>
	</EntryCard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
