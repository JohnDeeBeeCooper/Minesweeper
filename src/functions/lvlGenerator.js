import algmnt from './algmnt';
import bombsCount from './bombsCount';

export default (difficult, manual) => {
    let arr = [];
    let id = 0;
    let count = 0;
    let mines = 0;
    if (!manual) {
        switch (difficult) {
            case 'very easy':
                count = 7;
                mines = 6;
                break;
            case 'easy':
                count = 12;
                mines = 15;
                break;
            case 'normal':
                count = 15;
                mines = 32;
                break;
            case 'hard':
                count = 20;
                mines = 50;
                break;
            case 'impossible':
                count = 20;
                mines = 70;
                break;
            default:
                console.log('aaeaeaeaeaeae');
                break;
        }
        arr = [count, count];
    }
    else {
        arr = [manual.w, manual.h];
        count = manual.w;
    }
    const newWidth = [...Array(arr[0]).keys()];
    const newHeight = [...Array(arr[1]).keys()];
    const preNewArr = newHeight.reduce((acc, a) => {
        const newRange = newWidth.map(item => {
            return { id: id++, h: a, w: item, isBoom: false, isClosed: true, num: 0, note: '' }
        });
        return [...acc, ...newRange];
    }, []);
    const preArr = algmnt(preNewArr, mines);
    const newArr = bombsCount(preArr);
    const filtArr = newArr.filter(a => a.isBoom === true);
    console.log(filtArr.length);
    return { field: newArr, count: count };
}
