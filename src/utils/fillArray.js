export default (w, h) => {
    let id = 0;
    const newWidth = [...Array(w).keys()];
    const newHeight = [...Array(h).keys()];
    const res = newHeight.reduce((acc, a) => {
        const newRange = newWidth.map(item => {
            return { id: id++, h: a, w: item, isBoom: false, isClosed: true, num: 0, note: '' }
        });
        return [...acc, ...newRange];
    }, []);
    return res;
}