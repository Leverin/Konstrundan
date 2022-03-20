import * as React from 'react';
import { Callout } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

const INFO_VIEW_SIZE = 32;

const ArtistMapMarkerCallout = (props) => {
    const { identifier, title, subtitle, onPressCallout } = props;

    return (
        <Callout key={identifier} style={styles.callout} onPress={() => onPressCallout(identifier)}>
			<View style={styles.titleSubtitleContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{subtitle}</Text>
			</View>
			<View style={styles.infoView}>
				<Text style={styles.infoViewContent}>{'i'}</Text>
			</View>
        </Callout>
    );
};

const styles = StyleSheet.create({
    callout: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	infoView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#c2c2c2',
		marginLeft: 16,
		height: INFO_VIEW_SIZE,
        width: INFO_VIEW_SIZE,
		//borderRadius: '50%',
        borderRadius: INFO_VIEW_SIZE/2,
	},
    infoViewContent: {
        color: '#fff',
    },
    titleSubtitleContainer: {
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

export default ArtistMapMarkerCallout;
