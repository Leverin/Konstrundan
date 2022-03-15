import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { ARTIST_IMAGES_ASPECT_RATIO } from '../constants/constants';

const InfoViewArtist = props => {
    const { imageSource, name, address, city, phoneNumber, email, parking, homepage, busses } = props;

    const addressAndCityGroup = (
        <React.Fragment>
            {address ? <Text style={styles.text}>{address}</Text> : null}
            {city ? <Text style={styles.text}>{city}</Text> : null}
        </React.Fragment>
    );

    const parkingAndBussesGroup = (
        <React.Fragment>
            {parking ? <Text style={[styles.text, styles.firstLetterCapitalized]}>{`Parkering: ${parking}`}</Text> : null}
            {busses ? <Text style={[styles.text, styles.firstLetterCapitalized]}>{`Bussar: ${busses}`}</Text> : null}
        </React.Fragment>
    );

    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                {name ? <Text style={[styles.text, styles.textBold]}>{name}</Text> : null}
                {addressAndCityGroup}
                {phoneNumber ? <Text style={styles.text} dataDetectorType={'phoneNumber'}>{`Tel: ${phoneNumber}`}</Text> : null}
                {parking || busses ? parkingAndBussesGroup : null}
                {homepage ? <Text style={styles.text} dataDetectorType={'link'}>{homepage}</Text> : null}
                {email ? <Text style={styles.text} dataDetectorType={'email'}>{email}</Text> : null}
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
        paddingBottom: 32,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        paddingBottom: 12,
    },
    textBold: {
        fontWeight: 'bold',
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
