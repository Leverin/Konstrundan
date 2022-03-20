import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'expo-status-bar';
import { ARTIST_DATA } from './constants/constants';

import InfoViewGeneral from './components/InfoViewGeneral';
import ListViewArtists from './components/ListViewArtists';
import MapViewArtists from './components/MapViewArtists';
import InfoViewArtist from './components/InfoViewArtist';

import { KONSTRUNDAN_COLOURS } from './constants/constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarIconStyle: { display: "none" } }}>
            <Tab.Screen name={"INFO"} component={InfoViewGeneralStackNavigator}/>
            <Tab.Screen name={"KONSTNÄRER"} component={ListViewArtistsStackNavigator}/>
			<Tab.Screen name={"KARTA"} component={MapViewArtistsStackNavigator}/>
        </Tab.Navigator>
    );
};

const WindowMain = () => {
	return (
		<NavigationContainer>
			<MainStackNavigator/>
		</NavigationContainer>
	);
};

const screenOptionStyle = {
	headerStyle: {
	  backgroundColor: KONSTRUNDAN_COLOURS.RED,
	},
	headerTintColor: '#fff',
	headerBackTitle: 'Bakåt',
  };

const InfoViewGeneralStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name={'Info'} component={InfoViewGeneral} options={{headerLeft: (props) => null}} />
		</Stack.Navigator>
	);
};

const ListViewArtistsStackNavigator = () => {
	/*
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name={'ListArtists'} component={ListViewArtists} options={{ title: 'Konstnärer', headerLeft: (props) => null}} />
		</Stack.Navigator>
	);
	*/
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name={'ListArtists'} component={ListViewArtists} options={{ title: 'Konstnärer', headerLeft: (props) => null}} />
			<Stack.Screen name={'ArtistMap'} component={MapViewArtists} options={({ route }) => ({ title: route.params.title})}/>
			<Stack.Screen name={'ArtistDetailsFromSingleMap'} component={InfoViewArtist} options={({ route }) => ({ title: route.params.title })}/>
		</Stack.Navigator>
	);
};

const MapViewArtistsStackNavigator = () => {

	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name={'MapArtists'}
				component={MapViewArtists}
				options={{ title: 'Karta', headerLeft: (props) => null}}
				initialParams={{ artistsList: ARTIST_DATA }}
			/>
			<Stack.Screen name={"ArtistDetails"} component={InfoViewArtist} options={({ route }) => ({ title: route.params.title, headerLeft: (props) => null})}/>
		</Stack.Navigator>
	);
};

const MainStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen name={'TabNavigator'} component={BottomTabNavigator}/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		//marginTop: StatusBar.currentHeight,
		marginTop: 32,
	},
	tabBarIndicator: {
		backgroundColor: KONSTRUNDAN_COLOURS.YELLOW,
	},
	tabBarBackground: {
		backgroundColor: KONSTRUNDAN_COLOURS.RED,
	},
	scene: {
		flex: 1,
	},
});

export default WindowMain;
