export default (arr, id) => {
    const newArr = arr.map(a => {
        if (a.isBoom) {
            a.isClosed = false;
        }
        if (id === undefined) {
            a.note = 'flag';
        }
        return a;
    });
    if (id !== undefined) { newArr[id].red = true; }
    return newArr;
}
