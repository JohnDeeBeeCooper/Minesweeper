const algmnt = (arr, mines) => {
    const chance = mines / arr.length;
    const newArr = arr.map(a => {
        if (Math.random() <= chance * 1.2) {
            a.isBoom = true;
            a.num = '*';
        }
        return a;
    });
    return newArr;
};
export default algmnt;