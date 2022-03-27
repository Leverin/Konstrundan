import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { KONSTRUNDAN_COLOURS, ARTIST_DATA, VIEW_KEYS } from '../constants/constants';
import ArtistListViewItem from './subcomponents/ArtistListViewItem';

const ListViewArtists = ({ navigation }) => {

    const listItem = ({item}) => <ArtistListViewItem item={item} onPress={() => {navigation.navigate(VIEW_KEYS.MAP_ARTIST, {title: `${item.FORNAMN} ${item.EFTERNAMN}`, artistsList: [item]})}}/>;

    return (
        <FlatList
            data={ARTIST_DATA}
            renderItem={listItem}
            keyExtractor={item => item.NUMMER}
            style={styles.background}
            removeClippedSubviews={true}
        />
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: KONSTRUNDAN_COLOURS.YELLOW,
    }
});

export default React.memo(ListViewArtists);
