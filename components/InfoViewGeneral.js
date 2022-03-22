import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { KONSTRUNDAN_COLOURS } from '../constants/constants';

const InfoViewGeneral = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTextMain}>
                <View style={styles.containerCenter}>
                    <Text style={styles.textHeader}>{'Välkomna till Konstrundan!'}</Text>
                    <Text style={[styles.textHeader, styles.block]}>{'15 april - 24 april 2022'}</Text>
                </View>
                <Text style={styles.textBold}>{'Öppettider:'}</Text>
                <Text style={styles.textRegular}>{'Påskhelgen 10-18'}</Text>
                <Text style={styles.textRegular}>{'Vardagar 16-19'}</Text>
                <Text style={styles.textRegular}>{'Lörd-sönd 10-18'}</Text>
                <Text style={[styles.block, styles.textRegular]}>{'Obs! Vardagar i Konsthallen 12-17'}</Text>
                <Text style={[styles.textRegular, styles.block]}>{'I år har en del konstnärer endast öppet enl. överenskommelse på vardagar. Se telefonsymbol i folder och på hemsidan.'}</Text>
                <View style={styles.block}>
                    <Text style={styles.textRegular}>{'Mvh,'}</Text>
                    <Text style={styles.textRegular}>{'Styrelsen och konstnärerna i Nordvästra Skånes Konstnärsförening'}</Text>
                </View>
                <Text style={[styles.block, styles.textRegular]}>{'För aktuell coronainfo och avvikande öppettider, besök vår hemsida.'}</Text>
            </View>
            <View style={styles.containerCenter}>
                <Text style={styles.textBold} dataDetectorType={'link'}>{'https://www.konstrundan.se/'}</Text>
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
        //alignItems: 'center',
    },
    containerTextMain: {
        paddingLeft: '16%',
        paddingRight: '16%',
    },
    containerCenter: {
        //flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    textRegular: {
        fontSize: 16,
    },
    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textBold: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    block: {
        //paddingBottom: 32,
        paddingBottom: Dimensions.get('window').height*0.05,
    },
});

export default InfoViewGeneral;
