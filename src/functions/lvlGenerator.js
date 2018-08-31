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
                count = 5;
                mines = 5;
                break;
            case 'easy':
                count = 10;
                mines = 10;
                break;
            case 'normal':
                count = 15;
                mines = 32;
                break;
            case 'hard':
                count = 20;
                mines = 60;
                break;
            case 'impossible':
                count = 50;
                mines = 99;
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
    const preNewArr = newHeight.reduce((acc, a) => {
        const newRange = newWidth.map(item => {
            return { id: id++, h: a, w: item, isBoom: false, isClosed: true, num: 0 }
        });
        return [...acc, ...newRange];
    }, []);
    const preArr = algmnt(preNewArr, mines);
    const newArr = bombsCount(preArr);
    console.log(newArr);
    return { field: newArr, count: count };
}