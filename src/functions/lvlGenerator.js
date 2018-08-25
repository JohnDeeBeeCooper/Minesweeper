export default (difficult, manual) => {
    let arr = [];
    if (!manual) {
        let count = 0;
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
        console.log(arr);
    }
    else {
        arr = [manual.w, manual.h];
    }
    const newWidth = [...Array(arr[0]).keys()];
    const newHeight = [...Array(arr[0]).keys()];
    const newArr = newHeight.reduce((acc, a) => {
        const newRange = newWidth.map(item => {
            return { h: a, w: item, isBoom: false }
        });
        return [...acc, newRange];
    }, []);
    console.log(newArr);
    return newArr;
}