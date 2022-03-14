import { Marker } from 'react-native-maps';

export const getMarkersFromArtistData = (data) => {
    return data.map((item) => (
        <Marker
            key={item.NUMMER}
            coordinate={{ latitude: item.LATITUDE, longitude: item.LONGITUDE }}
            title={`${item.FORNAMN} ${item.EFTERNAMN}`}
            description={item.TEKNIK}
        />
    ));
};

export const getAppropriateRegion = (latitudeList, longitudeList) => {
    if (latitudeList.length !== longitudeList.length)
        return undefined;
    const total_locations = latitudeList.length;
    let minLongi = null, minLati = null, maxLongi = null, maxLati = null;

    for (var i = 0; i < total_locations; i++) {
        if (minLati == null || minLati > latitudeList[i]) {
            minLati = latitudeList[i];
        }
        if (minLongi == null || minLongi > longitudeList[i]) {
            minLongi = longitudeList[i];
        }
        if (maxLati == null || maxLati < latitudeList[i]) {
            maxLati = latitudeList[i];
        }
        if (maxLongi == null || maxLongi < longitudeList[i]) {
            maxLongi = longitudeList[i];
        }
    }

    const latitudeDiff = maxLati-minLati;
    const longitudeDiff = maxLongi-minLongi;
    const delta = latitudeDiff>longitudeDiff ? latitudeDiff*1.65 : longitudeDiff*1.2;

    if (total_locations>0 && delta>0) {

        return {
            latitude:((maxLati+minLati)/2),
            longitude:((maxLongi+minLongi)/2),
            latitudeDelta:delta,
            longitudeDelta:delta,
        };
    }
    return undefined;
};
