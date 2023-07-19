import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Card from './shared/card';
import EntryCard from './shared/entryCard';
import MiniCard from './shared/miniCard';
import Button from './shared/button';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//components with the deprecated libraries are the problem, animated
import JournalHome from './components/journal/journalHome';
import Habits from "./components/habit/tracker";
import TaskList from "./components/taskList/taskList";
import { Importer } from './importTest';
import { MyTabs } from './components/navigator/tabs';


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
	    <MyTabs />
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
