import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { KONSTRUNDAN_COLOURS } from '../constants/constants';

const InfoViewGeneral = () => {
    return (
        <View style={styles.container}>
            <Text>{'Välkommen till Konstrundan i Nordvästra Skåne 2022!'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: KONSTRUNDAN_COLOURS.YELLOW,
        paddingLeft: 24,
        paddingRight: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default InfoViewGeneral;