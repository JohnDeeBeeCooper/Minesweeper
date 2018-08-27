export default (difficult, manual) => {
    let arr = [];
    let id = 0;
    let count = 0;
    if (!manual) {
        switch (difficult) {
            case 'very easy':
                count = 5;
                break;
            case 'easy':
                count = 10;
                break;
            case 'normal':
                count = 15;
                break;
            case 'hard':
                count = 20;
                break;
            case 'i just wanna die':
                count = 100;
                break;
            default:
                console.log('aaeaeaeaeaeae');
        }
        arr = [count, count];
    }
    else {
        arr = [manual.w, manual.h];
        count = manual.w;
    }
    const newWidth = [...Array(arr[0]).keys()];
    const newHeight = [...Array(arr[1]).keys()];
    const newArr = newHeight.reduce((acc, a) => {
        const newRange = newWidth.map(item => {
            return { id: id++, h: a, w: item, isBoom: false, isClosed: true }
        });
        return [...acc, ...newRange];
    }, []);
    return { field: newArr, count: count };
}