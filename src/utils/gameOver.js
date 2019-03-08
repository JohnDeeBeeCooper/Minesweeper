export default (arr, id) => {
    const newArr = arr.map(a => {
        if (a.isBoom) {
            a.isClosed = false;
        }
        if (!id && id !== 0) {
            if (a.isBoom) {
                a.note = 'flag';
            }
        }
        return a;
    });
    if (id >= 0) { newArr[id].red = true; }
    return newArr;
}
