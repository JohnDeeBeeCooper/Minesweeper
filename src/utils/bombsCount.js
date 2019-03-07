export default (arr) => {
    const newArr = arr.map(a => {
        const preArr = arr
            .filter(item => Math.abs(item.h - a.h) <= 1 && Math.abs(item.w - a.w) <= 1 && a.isBoom === false && item.isBoom === true);
        a.num = a.isBoom ? '*' : preArr.length;
        return a;
    });
    return newArr;
}
