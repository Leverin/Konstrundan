import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, PixelRatio, Image } from 'react-native';
import { YELLOW, ARTIST_IMAGES } from '../constants/constants';

const IMAGE_PATH = '../assets/artistImages';
const IMAGE_EXTENSION = 'jpg';

const DATA = [
    {
      NUMMER: 1,
      FORNAMN: 'Anna',
      EFTERNAMN: 'Hansson',
      TEKNIK: 'Slöjd, textil, färg',
    },
    {
      NUMMER: 2,
      FORNAMN: 'Karl',
      EFTERNAMN: 'Knutsson',
      TEKNIK: 'Akvareller, olemålningar',
    },
    {
      NUMMER: 4,
      FORNAMN: 'Lasse',
      EFTERNAMN: 'Barbados',
      TEKNIK: 'Keramik, skulpturer',
    },
];

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

const ListViewArtists = () => {

    const renderItem = ({ item }) => {
        const textTop = `Nr ${item.NUMMER}`;
        const textCenter = `${item.FORNAMN} ${item.EFTERNAMN}`;
        const textBottom = item.TEKNIK;
        //const imagePath = `${IMAGE_PATH}/${item.NUMMER}.${IMAGE_EXTENSION}`;
        //const imagePath = '../assets/artistImages/1.jpg';
        //const numberString = item.NUMMEER.toString();
        //const imagePath = `../assets/artistImages/${numberString}.jpg`;
        //const imageSource = require(imagePath);
        //const imageSource = ARTIST_IMAGES.get(item.NUMMER);
        const imageSource = ARTIST_IMAGES[item.NUMMER];

        return <Item imageSource={imageSource} textTop={textTop} textCenter={textCenter} textBottom={textBottom}/>;
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.NUMMER}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: YELLOW,
        paddingTop: 6,
        paddingBottom: 6,
        //padding: 20,
        //height: PixelRatio.getPixelSizeForLayoutSize(95),
        height: 95,
        marginVertical: 8,
        //marginHorizontal: 16,
    },
    image: {
        height: 95,
        //maxWidth: '100%',
    },
    containerText: {
        flex: 1,
        marginLeft: 12,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'pink',
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

export default ListViewArtists;