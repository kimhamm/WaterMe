import React from 'react';
import {
    Pressable,
  SafeAreaView, Text
} from 'react-native';

export default function Home({navigation}): React.JSX.Element {

  return (
    <SafeAreaView>
        <Text>Home</Text>
        <Pressable onPress={() => navigation.navigate('Statistics')} style={{width: 60, height: 30, borderWidth: 1,}}><Text>Statistics</Text></Pressable>
        <Pressable onPress={() => navigation.navigate('OnBoarding')} style={{width: 60, height: 30, borderWidth: 1,}}><Text>OnBoarding</Text></Pressable>
        <Pressable onPress={() => navigation.navigate('Settings')} style={{width: 60, height: 30, borderWidth: 1,}}><Text>Settings</Text></Pressable>
    </SafeAreaView>
  );
}
