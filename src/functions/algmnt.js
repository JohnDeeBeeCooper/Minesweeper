export default (arr, mines) => {
    const chance = mines / arr.length;
    const newArr = arr.map(a => {
        if (Math.random() <= chance * (1.1 + mines / 75)) {
            a.isBoom = true;
            a.num = '*';
        }
        return a;
    });
    return newArr;
};
