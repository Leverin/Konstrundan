import * as React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
//import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import ArtistMapMarkerCallout from './subcomponents/ArtistMapMarkerCallout';
//import { ARTIST_DATA } from '../constants/constants';
import { getAppropriateRegion } from '../utils/utils-map';
import { getPropertyValuesFromData } from '../utils/utils-general';
import { getArtistWithNUMMERFromArray } from '../utils/utils-artists';

/*
const latitudes = getPropertyValuesFromData(ARTIST_DATA, 'LATITUDE');
const longitudes = getPropertyValuesFromData(ARTIST_DATA, 'LONGITUDE');
const initialRegion = getAppropriateRegion(latitudes, longitudes);
*/

const getMarkersFromArtistData = (data, onPressCallout) => {

	return data.map((artist) => (
        <Marker
            key={artist.NUMMER}
            coordinate={{ latitude: artist.LATITUDE, longitude: artist.LONGITUDE }}
            title={`${artist.FORNAMN} ${artist.EFTERNAMN}`}
            description={artist.TEKNIK}
        >
            <ArtistMapMarkerCallout identifier={artist.NUMMER} title={`${artist.FORNAMN} ${artist.EFTERNAMN}`} subtitle={artist.TEKNIK} onPressCallout={onPressCallout} />
        </Marker>
    ));
};

const MapViewArtists = ({ route, navigation }) => {

	const artistsList = route.params.artistsList;
	console.log('name: ', route.name);
	const componentDestinationName = route.name === 'MapArtists' ? 'ArtistDetails' : 'ArtistDetailsFromSingleMap';

	const onPressCallout = (NUMMER) => {
		console.log('onPressCallout');
		const artist = getArtistWithNUMMERFromArray(NUMMER, artistsList);
		const title = `${artist.FORNAMN} ${artist.EFTERNAMN}`;
		navigation.navigate(componentDestinationName, {artist, title});
	};

	const latitudes = getPropertyValuesFromData(artistsList, 'LATITUDE');
	const longitudes = getPropertyValuesFromData(artistsList, 'LONGITUDE');
	const initialRegion = getAppropriateRegion(latitudes, longitudes);

	return (
        <View style={styles.container}>
        	<MapView showsUserLocation={true} style={styles.map} initialRegion={initialRegion}>
				{getMarkersFromArtistData(artistsList, onPressCallout)}
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

export default React.memo(MapViewArtists);
