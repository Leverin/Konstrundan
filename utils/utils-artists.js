
export const getArtistWithKey = (data, key) => {
    return data.find(item => item.NUMMER === key);
};
