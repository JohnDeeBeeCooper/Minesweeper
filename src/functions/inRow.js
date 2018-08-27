export default (arr, count) => {
    let t = count;
    let preCount = 0;
    let newArr = [];
    while (t <= arr.length) {
        newArr.push(arr.slice(preCount, t));
        preCount = t;
        t += count;
    }
    return newArr;
}