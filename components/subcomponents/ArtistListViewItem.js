import * as React from 'react';
import { StyleSheet, View, Pressable, Image, Text } from 'react-native';
import { ARTIST_IMAGES, ARTIST_IMAGES_ASPECT_RATIO, KONSTRUNDAN_COLOURS } from '../../constants/constants';

const Item = ({ imageSource, textTop, textCenter, textBottom }) => (
    <View style={styles.item}>
        <Image style={styles.image} source={imageSource}/>
        <View style={styles.containerText}>
            <Text style={styles.textTop}>{textTop}</Text>
            <Text style={styles.textCenter}>{textCenter}</Text>
            <Text style={styles.textBottom}>{textBottom}</Text>
        </View>
    </View>
);

const ArtistListViewItem = (props) => {
    const artist = props.item;
    const onPress = props.onPress;

    const textTop = `Nr ${artist.NUMMER}`;
    const textCenter = `${artist.FORNAMN} ${artist.EFTERNAMN}`;
    const textBottom = artist.TEKNIK;
    const imageSource = ARTIST_IMAGES[artist.NUMMER];

    return (
        <React.Fragment key={artist.NUMMER}>
            <Pressable onPress={onPress}
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            >
                <View style={styles.dividerLight}/>
                <Item imageSource={imageSource} textTop={textTop} textCenter={textCenter} textBottom={textBottom}/>
                <View style={styles.dividerDark}/>
            </Pressable>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    dividerDark: {
        height: 1,
        backgroundColor: KONSTRUNDAN_COLOURS.GREY_DARK,
    },
    dividerLight: {
        height: 1,
        backgroundColor: '#FFF6B0',
    },
    item: {
        flexDirection: 'row',
        backgroundColor: KONSTRUNDAN_COLOURS.YELLOW,
        height: 95,
    },
    image: {
        height: '100%',
        width: undefined,
        aspectRatio: ARTIST_IMAGES_ASPECT_RATIO,
    },
    containerText: {
        flex: 1,
        marginLeft: 12,
        paddingTop: 6,
        paddingBottom: 6,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textTop: {
        fontSize: 12,
    },
    textCenter: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textBottom: {
        fontSize: 12,
    }
});

export default React.memo(ArtistListViewItem);
