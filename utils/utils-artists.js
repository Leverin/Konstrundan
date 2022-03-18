import { ARTIST_IMAGES } from '../constants/constants';

export const getArtistWithKey = (data, key) => {
    return data.find(item => item.NUMMER === key);
};

export const getDetailsPropsForArtistWithKey = (data, key) => {
    //imageSource, name, address, city, phoneNumber, email, parking, homepage, busses
    //const artist = data[key];
    const artist = getArtistWithKey(data, key);

    console.log('key: ', key);
    console.log('artist: ', artist);
    return {
        imageSource: ARTIST_IMAGES[key],
        name: `${artist.FORNAMN} ${artist.EFTERNAMN}`,
        address: artist.ADRESS,
        city: artist.ORT,
        phoneNumber: artist.MOBIL,
        email: artist.EPOST,
        parking: artist.PARKERING,
        homepage: artist.HEMSIDA,
        busses: artist.BUSSAR,
    }
};