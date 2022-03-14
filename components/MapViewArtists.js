import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ARTIST_DATA } from '../constants/constants';

/*
let mapMarkers = [];
ARTIST_DATA.map((item) => {
	const marker = <Marker
					key={item.NUMMER}
					coordinate={{ latitude: item.LATITUDE, longitude: item.LONGITUDE }}
					title={`${item.FORNAMN} ${item.EFTERNAMN}`}
					description={'My description'}
					/>;
	mapMarkers.push(marker);
});
*/

const MapViewArtists = () => {
    return (
        <View style={styles.container}>
        	<MapView showsUserLocation={true} style={styles.map}>
				{ARTIST_DATA.map((item) => (
					<Marker
						key={item.NUMMER}
						coordinate={{ latitude: item.LATITUDE, longitude: item.LONGITUDE }}
						title={`${item.FORNAMN} ${item.EFTERNAMN}`}
						description={'My description'}
					/>
				))}
			</MapView>
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
  	map: {
    	width: Dimensions.get('window').width,
    	height: Dimensions.get('window').height,
  	},
});

export default MapViewArtists;