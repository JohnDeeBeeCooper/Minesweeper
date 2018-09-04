const ids = (id, arr, filtId) => { //i won't fix this func
    const item = arr[id];
    let res = [];
    if (item.num === 0) {
        res = arr.reduce((acc, a) => {
            if (Math.abs(a.h - item.h) <= 1 && Math.abs(a.w - item.w) <= 1 && !filtId.includes(a.id)) {
                filtId.push(a.id);
                return [...acc, ...ids(a.id, arr, filtId)];
            }
            return acc;
        }, []);
        const result = new Set([...res, ...filtId]);
        return result;
    }
    else {
        res.push(item.id);
        return res;
    }
}
const openWounds = (id, arr) => { //ref
    const items = ids(id, arr, []);
    items.forEach((item, i, newArr) => {
        arr[item].isClosed = arr[item].note === '' ? false : true;
    });
    return arr;
}
export default openWounds;
