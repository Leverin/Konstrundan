import * as React from 'react';
//import MapView, { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ARTIST_DATA } from '../constants/constants';
import { getAppropriateRegion, getMarkersFromArtistData } from '../utils/utils-map';
import { getPropertyValuesFromData } from '../utils/utils-general';

const latitudes = getPropertyValuesFromData(ARTIST_DATA, 'LATITUDE');
const longitudes = getPropertyValuesFromData(ARTIST_DATA, 'LONGITUDE');
const initialRegion = getAppropriateRegion(latitudes, longitudes);

const mapViewMarkers = getMarkersFromArtistData(ARTIST_DATA);

const MapViewArtists = () => {
    return (
        <View style={styles.container}>
        	<MapView showsUserLocation={true} style={styles.map} initialRegion={initialRegion}>
				{mapViewMarkers}
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
    	height: Dimensions.get('window').height-32,
  	},
});

export default MapViewArtists;