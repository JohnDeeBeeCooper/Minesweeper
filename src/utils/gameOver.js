import update from 'immutability-helper';

export default (arr, id) => {
    const newArr = arr.map(a => {
        if (a.isBoom) {
            a = update(a, { isClosed: { $set: false } });
        }
        if (!id && id !== 0) {
            if (a.isBoom) {
                a = update(a, { note: { $set: 'flag' } });
            }
        }
        return a;
    });
    if (id >= 0) {
        const res = update(newArr, { [id]: { red: { $set: true } } });
        return res;
    }
    return newArr;

}
