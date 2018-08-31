export default (arr, id) => {
    const newArr = arr.map(a => {
        if (a.isBoom) {
            a.isClosed = false;
        }
        return a;
    });
    newArr[id].red = true;
    console.log(newArr);
    return newArr;
}