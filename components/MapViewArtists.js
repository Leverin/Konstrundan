import * as React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
//import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
//import { ARTIST_DATA } from '../constants/constants';
import { getAppropriateRegion } from '../utils/utils-map';
import { getPropertyValuesFromData } from '../utils/utils-general';

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
            <Callout key={artist.NUMMER} style={styles.callout} onPress={() => {onPressCallout(artist)}}>
				<Text style={styles.title}>{`${artist.FORNAMN} ${artist.EFTERNAMN}`}</Text>
				<Text style={styles.subtitle}>{`${artist.TEKNIK}`}</Text>
            </Callout>
        </Marker>
    ));
};

const MapViewArtists = ({ route, navigation }) => {

	const artistsData = route.params.artistsData;
	const componentDestinationName = artistsData.length > 1 ? 'ArtistDetails' : 'ArtistDetailsFromSingleMap';

	const onPressCallout = (artist) => {
		const title = `${artist.FORNAMN} ${artist.EFTERNAMN}`;
		navigation.navigate(componentDestinationName, {artist, title});
	};

	const latitudes = getPropertyValuesFromData(artistsData, 'LATITUDE');
	const longitudes = getPropertyValuesFromData(artistsData, 'LONGITUDE');
	const initialRegion = getAppropriateRegion(latitudes, longitudes);

	return (
        <View style={styles.container}>
        	<MapView showsUserLocation={true} style={styles.map} initialRegion={initialRegion}>
				{getMarkersFromArtistData(artistsData, onPressCallout)}
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
	callout: {
		flex: 1,
		flexDirection: 'column',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 14,
	},
});

export default React.memo(MapViewArtists);
