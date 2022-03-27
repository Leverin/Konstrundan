import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { ARTIST_IMAGES, ARTIST_IMAGES_ASPECT_RATIO, KONSTRUNDAN_COLOURS } from '../constants/constants';

const maximumImageHeight = 256;
const oneFifthScreenSize = Dimensions.get('window').height*0.34;
const IMAGE_HEIGHT = oneFifthScreenSize > maximumImageHeight ? maximumImageHeight : oneFifthScreenSize;

const getInfoViewPropsFromArtist = (artist) => {

    return {
        imageSource: ARTIST_IMAGES[artist.NUMMER],
        name: `${artist.FORNAMN} ${artist.EFTERNAMN}`,
        address: artist.ADRESS,
        city: artist.ORT,
        phoneNumber: artist.MOBIL,
        email: artist.EPOST,
        parking: artist.PARKERING,
        homepage: artist.HEMSIDA,
        busses: artist.BUSSAR,
    }
};

const InfoViewArtist = ({route}) => {

    const props = getInfoViewPropsFromArtist(route.params.artist);
    const { imageSource, name, address, city, phoneNumber, email, parking, homepage, busses } = props;

    const addressAndCityGroup = (
        <React.Fragment>
            {address ? <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>{address}</Text> : null}
            {city ? <Text style={styles.textWithPadding} numberOfLines={1} adjustsFontSizeToFit={true}>{city}</Text> : null}
        </React.Fragment>
    );

    const parkingAndBussesGroup = (
        <React.Fragment>
            {parking ? <Text style={[styles.text, styles.firstLetterCapitalized]} numberOfLines={1} adjustsFontSizeToFit={true}>{`Parkering: ${parking}`}</Text> : null}
            {busses ? <Text style={[styles.textWithPadding, styles.firstLetterCapitalized]} numberOfLines={1} adjustsFontSizeToFit={true}>{`Bussar: ${busses}`}</Text> : null}
        </React.Fragment>
    );

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.containerText}>
                    {name ? <Text style={[styles.textWithPadding, styles.textBold]} numberOfLines={1} adjustsFontSizeToFit={true}>{name}</Text> : null}
                    {addressAndCityGroup}
                    {phoneNumber ? <Text style={styles.textWithPadding} dataDetectorType={'phoneNumber'} numberOfLines={1} adjustsFontSizeToFit={true}>{`Tel: ${phoneNumber}`}</Text> : null}
                    {parking || busses ? parkingAndBussesGroup : null}
                    {homepage ? <Text style={styles.textWithPadding} dataDetectorType={'link'} numberOfLines={1} adjustsFontSizeToFit={true}>{homepage}</Text> : null}
                    {email ? <Text style={styles.textWithPadding} dataDetectorType={'email'} numberOfLines={1} adjustsFontSizeToFit={true}>{email}</Text> : null}
                </View>
                <Image style={styles.image} source={imageSource}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: KONSTRUNDAN_COLOURS.WHITE,
    },
	container: {
    	flex: 1,
        flexDirection: 'column',
    	backgroundColor: '#fff',
    	alignItems: 'center',
    	justifyContent: 'center',
        marginTop: 12,
  	},
    containerText: {
        paddingBottom: 14,
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
    },
    textWithPadding: {
        fontSize: 14,
        paddingBottom: 12,
    },
    textBold: {
        fontWeight: 'bold',
    },
    image: {
        //height: 160,
        height: IMAGE_HEIGHT,
        width: undefined,
        aspectRatio: ARTIST_IMAGES_ASPECT_RATIO,
        marginBottom: 12,
    },
    firstLetterCapitalized: {
        textTransform: 'capitalize',
    },
});

export default InfoViewArtist;
