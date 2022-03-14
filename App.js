import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TabView, SceneMap } from 'react-native-tab-view';

import InfoView from './components/InfoViewGeneral';
import ListViewArtists from './components/ListViewArtists';
import MapView from './components/MapViewArtists';

import { KONSTRUNDAN_COLOURS } from './constants/constants';

const routeFirst = () => (
	<InfoView style={[styles.scene, { backgroundColor: KONSTRUNDAN_COLOURS.YELLOW }]} />
);

const SecondRoute = () => (
	<ListViewArtists style={[styles.scene, { backgroundColor: KONSTRUNDAN_COLOURS.YELLOW }]} />
);

const RouteMap = () => (
	<MapView style={[styles.scene, { backgroundColor: KONSTRUNDAN_COLOURS.YELLOW }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
	info: routeFirst,
	artists: SecondRoute,
	karta: RouteMap,
});

const WindowMain = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'info', title: 'INFO' },
		{ key: 'artists', title: 'KONSTNÄRER' },
		{ key: 'karta', title: 'KARTA' },
	]);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={initialLayout}
			style={styles.container}
			sceneAnimationEnabled={false}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		//marginTop: StatusBar.currentHeight,
		marginTop: 100,
	},
	scene: {
		flex: 1,
	},
});

export default WindowMain;


/*
export default function App() {
  return (
	<View style={styles.container}>
	  <Text>Open up App.js to start working on your appi!</Text>
	  <StatusBar style="auto" />
	</View>
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
*/