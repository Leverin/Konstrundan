import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Pressable } from 'react-native';
import { KONSTRUNDAN_COLOURS, ARTIST_IMAGES, ARTIST_DATA, ARTIST_IMAGES_ASPECT_RATIO } from '../constants/constants';

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

const ListViewArtists = ({ navigation }) => {

    const renderArtistItem = ({ item }) => {
        const textTop = `Nr ${item.NUMMER}`;
        const textCenter = `${item.FORNAMN} ${item.EFTERNAMN}`;
        const textBottom = item.TEKNIK;
        const imageSource = ARTIST_IMAGES[item.NUMMER];

        return (
            <React.Fragment key={item.NUMMER}>
                <Pressable onPress={() => {navigation.navigate('ArtistMap', {artistsList: [item]})}}>
                    <View style={styles.dividerLight}/>
                    <Item imageSource={imageSource} textTop={textTop} textCenter={textCenter} textBottom={textBottom}/>
                    <View style={styles.dividerDark}/>
                </Pressable>
            </React.Fragment>
        );
    };
    
    return (
        <FlatList
            data={ARTIST_DATA}
            renderItem={renderArtistItem}
            keyExtractor={item => item.NUMMER}
            style={styles.background}
        />
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: KONSTRUNDAN_COLOURS.YELLOW,
    },
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

export default React.memo(ListViewArtists);
