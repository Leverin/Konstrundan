import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

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

const KonstrundanTabBar = props => (
	<TabBar
	  {...props}
	  indicatorStyle={styles.tabBarBackground}
	  style={styles.tabBarBackground}
	/>
  );

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
			renderTabBar={KonstrundanTabBar}
		/>
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
