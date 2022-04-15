import * as React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import ArtistMapMarkerCallout from './subcomponents/ArtistMapMarkerCallout';
import { ARTIST_MAP_MARKERS, VIEW_KEYS } from '../constants/constants';
import { getAppropriateRegion } from '../utils/utils-map';
import { getPropertyValuesFromData } from '../utils/utils-general';
import { getArtistWithNUMMERFromArray } from '../utils/utils-artists';
import * as Location from 'expo-location';


const getMarkersFromArtistData = (data, onPressCallout) => {

	return data.map((artist) => {
		return (
			<Marker
				key={artist.NUMMER}
				coordinate={{ latitude: artist.LATITUDE, longitude: artist.LONGITUDE }}
				tracksViewChanges={false}
				anchor={{x: 0.5, y: 1}}
				centerOffset={{x: 0.5, y: 1}}
				image={ARTIST_MAP_MARKERS[artist.NUMMER]}
			>
				<ArtistMapMarkerCallout identifier={artist.NUMMER} title={`${artist.FORNAMN} ${artist.EFTERNAMN}`} subtitle={artist.TEKNIK} onPressCallout={onPressCallout} />
			</Marker>
		);
	});
};

const getMarkerForSamlingsUtstallningen = (data) => {
	return (
		<Marker
			key={'samlingsutstallningen'}
			coordinate={{ latitude: 55.87120350970891, longitude: 12.82450685817438 }}
			tracksViewChanges={false}
			title={'Samlingsutställningen'}
			description={'Landskrona Konsthall'}
		/>
	);
};

const MapViewArtists = ({ route, navigation }) => {

	Location.requestForegroundPermissionsAsync();

	const artistsList = route.params.artistsList;
	const componentDestinationName = route.name === VIEW_KEYS.MAP_ARTISTS_MULTIPLE
		? VIEW_KEYS.DETAILS_ARTIST_FROM_MAP_MULTIPLE
		: VIEW_KEYS.DETAILS_ARTIST_FROM_MAP_SINGLE;

	const onPressCallout = (NUMMER) => {
		const artist = getArtistWithNUMMERFromArray(NUMMER, artistsList);
		const title = `${artist.FORNAMN} ${artist.EFTERNAMN}`;
		navigation.navigate(componentDestinationName, {artist, title});
	};

	const latitudes = getPropertyValuesFromData(artistsList, 'LATITUDE');
	const longitudes = getPropertyValuesFromData(artistsList, 'LONGITUDE');
	const initialRegion = getAppropriateRegion(latitudes, longitudes);

	const shouldDisplaySamlingsutstallningen = artistsList.length > 1;

	return (
        <View style={styles.container}>
        	<MapView
				style={styles.map}
				showsUserLocation={true}
				showsMyLocationButton={true}
				initialRegion={initialRegion}
				provider={PROVIDER_GOOGLE}
				toolbarEnabled={true}
			>
				{getMarkersFromArtistData(artistsList, onPressCallout)}
				{shouldDisplaySamlingsutstallningen ? getMarkerForSamlingsUtstallningen(): null}
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
		width: '100%',
    	height: '100%',
  	},
});

export default React.memo(MapViewArtists);
