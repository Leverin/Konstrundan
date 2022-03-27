import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from 'expo-status-bar';
import { ARTIST_DATA, VIEW_KEYS } from './constants/constants';
import { Ionicons } from '@expo/vector-icons';

//import BottomTabNavigator from './components/TabComponent';
import InfoViewGeneral from './components/InfoViewGeneral';
import ListViewArtists from './components/ListViewArtists';
import MapViewArtists from './components/MapViewArtists';
import InfoViewArtist from './components/InfoViewArtist';

import { KONSTRUNDAN_COLOURS } from './constants/constants';

const ICON_NAMES = {
	INFO: 'information',
	ARTISTS: 'people',
	MAP: 'map',
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveBackgroundColor: KONSTRUNDAN_COLOURS.RED,
				tabBarInactiveBackgroundColor: KONSTRUNDAN_COLOURS.RED,
				tabBarInactiveTintColor: KONSTRUNDAN_COLOURS.WHITE,
				tabBarActiveTintColor: KONSTRUNDAN_COLOURS.YELLOW,
				tabBarStyle: { backgroundColor: KONSTRUNDAN_COLOURS.RED },
			}}
		>
            <Tab.Screen
				name={'INFO'}
				component={InfoViewGeneralStackNavigator}
				options={{
					tabBarIcon: ({color, size}) => (
						<Ionicons name={ICON_NAMES.INFO} size={size} color={color} />
					),
				}}
			/>
            <Tab.Screen
				name={'KONSTNÄRER'}
				component={ListViewArtistsStackNavigator}
				options={{
					tabBarIcon: ({color, size}) => (
						<Ionicons name={ICON_NAMES.ARTISTS} size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={'KARTA'}
				component={MapViewArtistsStackNavigator}
				options={{
					tabBarIcon: ({color, size}) => (
						<Ionicons name={ICON_NAMES.MAP} size={size} color={color} />
					),
				}}
			/>
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

const stackNavigatorScreenOptionStyle = {
	headerStyle: {
	  backgroundColor: KONSTRUNDAN_COLOURS.RED,
	},
	headerTintColor: KONSTRUNDAN_COLOURS.WHITE,
	headerBackTitle: 'Bakåt',
  };

const InfoViewGeneralStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={stackNavigatorScreenOptionStyle}>
			<Stack.Screen name={'Info'} component={InfoViewGeneral} options={{headerLeft: (props) => null}} />
		</Stack.Navigator>
	);
};

const ListViewArtistsStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={stackNavigatorScreenOptionStyle}>
			<Stack.Screen name={VIEW_KEYS.LIST_ARTISTS} component={ListViewArtists} options={{ title: 'Konstnärer', headerLeft: (props) => null}} />
			<Stack.Screen name={VIEW_KEYS.MAP_ARTIST} component={MapViewArtists} options={({ route }) => ({ title: route.params.title})}/>
			<Stack.Screen name={VIEW_KEYS.DETAILS_ARTIST_FROM_MAP_SINGLE} component={InfoViewArtist} options={({ route }) => ({ title: route.params.title })}/>
		</Stack.Navigator>
	);
};

const MapViewArtistsStackNavigator = () => {

	return (
		<Stack.Navigator screenOptions={stackNavigatorScreenOptionStyle}>
			<Stack.Screen
				name={VIEW_KEYS.MAP_ARTISTS_MULTIPLE}
				component={MapViewArtists}
				options={{ title: 'Karta', headerLeft: (props) => null}}
				initialParams={{ artistsList: ARTIST_DATA }}
			/>
			<Stack.Screen name={VIEW_KEYS.DETAILS_ARTIST_FROM_MAP_MULTIPLE} component={InfoViewArtist} options={({ route }) => ({ title: route.params.title, headerLeft: (props) => null})}/>
		</Stack.Navigator>
	);
};

const MainStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}} styles={styles.container}>
			<Stack.Screen name={'TabNavigator'} component={BottomTabNavigator}/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
