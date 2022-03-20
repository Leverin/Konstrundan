
export const getArtistWithNUMMERFromArray = (NUMMER, artistsList) => {
    return artistsList.find(artist => artist.NUMMER === NUMMER);
};

/*
export const getArtistWithKey = (data, key) => {
    return data.find(item => item.NUMMER === key);
};
*/
