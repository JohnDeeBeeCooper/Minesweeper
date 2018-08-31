import update from 'immutability-helper';

const openWounds = (id, arr, noId) => { //ref
    const item = arr[id];
    let newArr = [];
    if (item.num === 0) {
        newArr = arr.reduce((acc, a) => {
            if (Math.abs(item.h - a.h) <= 1 && Math.abs(item.w - a.w) <= 1) {
                a.isClosed = false;
            }
            return [...acc, a];
        }, []);
        console.log(newArr);
    }
    else {
        newArr = update(arr, { [id]: { isClosed: { $set: false } } });
    }
    return newArr;
}

export default openWounds;