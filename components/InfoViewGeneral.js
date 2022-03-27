import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

import { KONSTRUNDAN_COLOURS } from '../constants/constants';

const FONTSIZE = {
    STANDARD: 14,
    HEADER: 16,
};

const InfoViewGeneral = () => {
    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainerStyle}>
            <View style={styles.container}>
                <View style={styles.containerTextMain}>
                    <View style={styles.containerCenter}>
                        <Text style={styles.textHeader} numberOfLines={1} adjustsFontSizeToFit={true}>{'Välkomna till Konstrundan!'}</Text>
                        <Text style={[styles.textHeader, styles.block]} numberOfLines={1} adjustsFontSizeToFit={true}>{'15 april - 24 april 2022'}</Text>
                    </View>
                    <Text style={styles.textBold} numberOfLines={1} adjustsFontSizeToFit={true}>{'Öppettider:'}</Text>
                    <Text style={styles.textRegular} numberOfLines={1} adjustsFontSizeToFit={true}>{'Påskhelgen 10-18'}</Text>
                    <Text style={styles.textRegular} numberOfLines={1} adjustsFontSizeToFit={true}>{'Vardagar 16-19'}</Text>
                    <Text style={styles.textRegular} numberOfLines={1} adjustsFontSizeToFit={true}>{'Lörd-sönd 10-18'}</Text>
                    <Text style={[styles.block, styles.textRegular]} adjustsFontSizeToFit={true}>{'Obs! Vardagar i Konsthallen 12-17'}</Text>
                    <Text style={[styles.textRegular, styles.block]} adjustsFontSizeToFit={true}>{'I år har en del konstnärer endast öppet enl. överenskommelse på vardagar. Se telefonsymbol i folder och på hemsidan.'}</Text>
                    <View style={styles.block}>
                        <Text style={styles.textRegular} numberOfLines={1} adjustsFontSizeToFit={true}>{'Mvh,'}</Text>
                        <Text style={styles.textRegular} adjustsFontSizeToFit={true}>{'Styrelsen och konstnärerna i Nordvästra Skånes Konstnärsförening'}</Text>
                    </View>
                    <Text style={[styles.block, styles.textRegular]} adjustsFontSizeToFit={true}>{'För aktuell coronainfo och avvikande öppettider, besök vår hemsida.'}</Text>
                </View>
                <View style={styles.containerCenter}>
                    <Text style={styles.textBold} dataDetectorType={'link'} numberOfLines={1} adjustsFontSizeToFit={true}>{'https://www.konstrundan.se/'}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: KONSTRUNDAN_COLOURS.YELLOW,
    },
    scrollViewContentContainerStyle: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 12,
    },
    containerTextMain: {
        paddingLeft: '16%',
        paddingRight: '16%',
    },
    containerCenter: {
        alignItems: 'center',
    },
    textRegular: {
        fontSize: FONTSIZE.STANDARD,
    },
    textHeader: {
        fontSize: FONTSIZE.HEADER,
        fontWeight: 'bold',
    },
    textBold: {
        fontSize: FONTSIZE.STANDARD,
        fontWeight: 'bold',
        color: '#000',
    },
    block: {
        paddingBottom: Dimensions.get('window').height*0.03,
    },
});

export default React.memo(InfoViewGeneral);
