const algmnt = (arr, mines) => {
    const chance = mines / arr.length;
    const newArr = arr.map(a => {
        if (Math.random() <= chance) {
            a.isBoom = true;
        }
        return a;
    });
    return newArr;
};
export default algmnt;