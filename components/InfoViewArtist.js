import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { ARTIST_IMAGES_ASPECT_RATIO } from '../constants/constants';

const IMAGE_HEIGHT = Dimensions.get('window').height*0.3;

const InfoViewArtist = props => {
    const { imageSource, name, address, city, phoneNumber, email, parking, homepage, busses } = props;

    const addressAndCityGroup = (
        <React.Fragment>
            {address ? <Text>{address}</Text> : null}
            {city ? <Text>{city}</Text> : null}
        </React.Fragment>
    );

    const parkingAndBussesGroup = (
        <React.Fragment>
            {parking ? <Text style={styles.firstLetterCapitalized}>{`Parkering: ${parking}`}</Text> : null}
            {busses ? <Text style={styles.firstLetterCapitalized}>{`Bussar: ${busses}`}</Text> : null}
        </React.Fragment>
    );

    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                {name ? <Text>{name}</Text> : null}
                {addressAndCityGroup}
                {phoneNumber ? <Text dataDetectorType={'phoneNumber'}>{`Tel: ${phoneNumber}`}</Text> : null}
                {parking || busses ? parkingAndBussesGroup : null}
                {homepage ? <Text dataDetectorType={'link'}>{homepage}</Text> : null}
                {email ? <Text dataDetectorType={'email'}>{email}</Text> : null}
            </View>
            <Image style={styles.image} source={imageSource}/>
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
    	flex: 1,
        flexDirection: 'column',
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
    containerText: {
        paddingVertical: 12,
        alignItems: 'center',
    },
    image: {
        height: 256,
        width: undefined,
        aspectRatio: ARTIST_IMAGES_ASPECT_RATIO,
    },
    firstLetterCapitalized: {
        textTransform: 'capitalize',
    },
});

export default InfoViewArtist;
