import * as React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
//import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ARTIST_DATA } from '../constants/constants';
import { getAppropriateRegion } from '../utils/utils-map';
import { getPropertyValuesFromData } from '../utils/utils-general';
import { getDetailsPropsForArtistWithKey } from '../utils/utils-artists';

const latitudes = getPropertyValuesFromData(ARTIST_DATA, 'LATITUDE');
const longitudes = getPropertyValuesFromData(ARTIST_DATA, 'LONGITUDE');
const initialRegion = getAppropriateRegion(latitudes, longitudes);

const getMarkersFromArtistData = (data, onPressCallout) => {

	return data.map((item) => (
        <Marker
            key={item.NUMMER}
            coordinate={{ latitude: item.LATITUDE, longitude: item.LONGITUDE }}
            title={`${item.FORNAMN} ${item.EFTERNAMN}`}
            description={item.TEKNIK}
        >
            <Callout key={item.NUMMER} style={styles.callout} onPress={() => {onPressCallout(item.NUMMER)}}>
				<Text style={styles.title}>{`${item.FORNAMN} ${item.EFTERNAMN}`}</Text>
				<Text style={styles.subtitle}>{`${item.TEKNIK}`}</Text>
            </Callout>
        </Marker>
    ));
};

const MapViewArtists = ({ navigation }) => {

	const onPressCallout = (artistKey) => {
		console.log('Max artistKey: ', artistKey);
		//imageSource, name, address, city, phoneNumber, email, parking, homepage, busses
		const props = getDetailsPropsForArtistWithKey(ARTIST_DATA, artistKey);
		navigation.navigate('ArtistDetails', {props, title: props.name});
	};

	return (
        <View style={styles.container}>
        	<MapView showsUserLocation={true} style={styles.map} initialRegion={initialRegion}>
				{getMarkersFromArtistData(ARTIST_DATA, onPressCallout)}
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
