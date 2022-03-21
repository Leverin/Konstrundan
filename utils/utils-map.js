
export const getAppropriateRegion = (latitudeList, longitudeList) => {
    if (latitudeList.length !== longitudeList.length) {
        return undefined;
    }

    const locationsCount = latitudeList.length;

    if (locationsCount === 1) {
        return {
            latitude: latitudeList[0],
            longitude: longitudeList[0],
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }
    }

    let minLongi = null, minLati = null, maxLongi = null, maxLati = null;

    for (var i = 0; i < locationsCount; i++) {
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

    if (locationsCount>0 && delta>0) {

        return {
            latitude:((maxLati+minLati)/2),
            longitude:((maxLongi+minLongi)/2),
            latitudeDelta:delta,
            longitudeDelta:delta,
        };
    }
    return undefined;
};
