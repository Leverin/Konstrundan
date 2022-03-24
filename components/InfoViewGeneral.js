import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { KONSTRUNDAN_COLOURS } from '../constants/constants';

const InfoViewGeneral = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTextMain}>
                <View style={styles.containerCenter}>
                    <Text style={styles.textHeader} adjustsFontSizeToFit={true}>{'Välkomna till Konstrundan!'}</Text>
                    <Text style={[styles.textHeader, styles.block]} adjustsFontSizeToFit={true}>{'15 april - 24 april 2022'}</Text>
                </View>
                <Text style={styles.textBold} adjustsFontSizeToFit={true}>{'Öppettider:'}</Text>
                <Text style={styles.textRegular} adjustsFontSizeToFit={true}>{'Påskhelgen 10-18'}</Text>
                <Text style={styles.textRegular} adjustsFontSizeToFit={true}>{'Vardagar 16-19'}</Text>
                <Text style={styles.textRegular} adjustsFontSizeToFit={true}>{'Lörd-sönd 10-18'}</Text>
                <Text style={[styles.block, styles.textRegular]} adjustsFontSizeToFit={true}>{'Obs! Vardagar i Konsthallen 12-17'}</Text>
                <Text style={[styles.textRegular, styles.block]} adjustsFontSizeToFit={true}>{'I år har en del konstnärer endast öppet enl. överenskommelse på vardagar. Se telefonsymbol i folder och på hemsidan.'}</Text>
                <View style={styles.block}>
                    <Text style={styles.textRegular} adjustsFontSizeToFit={true}>{'Mvh,'}</Text>
                    <Text style={styles.textRegular} adjustsFontSizeToFit={true}>{'Styrelsen och konstnärerna i Nordvästra Skånes Konstnärsförening'}</Text>
                </View>
                <Text style={[styles.block, styles.textRegular]} adjustsFontSizeToFit={true}>{'För aktuell coronainfo och avvikande öppettider, besök vår hemsida.'}</Text>
            </View>
            <View style={styles.containerCenter}>
                <Text style={styles.textBold} dataDetectorType={'link'} adjustsFontSizeToFit={true}>{'https://www.konstrundan.se/'}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: KONSTRUNDAN_COLOURS.YELLOW,
        justifyContent: 'center',
    },
    containerTextMain: {
        paddingLeft: '16%',
        paddingRight: '16%',
    },
    containerCenter: {
        alignItems: 'center',
    },
    textRegular: {
        fontSize: 12,
    },
    textHeader: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    textBold: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
    block: {
        paddingBottom: Dimensions.get('window').height*0.03,
    },
});

export default InfoViewGeneral;
