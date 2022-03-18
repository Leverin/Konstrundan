
export const getPropertyValuesFromData = (data, property) => {
    return data.map((item) => {
        return item[property];
    });
};
