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
                mines = 12;
                break;
            case 'normal':
                count = 15;
                mines = 25;
                break;
            case 'hard':
                count = 20;
                mines = 35;
                break;
            case 'impossible':
                count = 20;
                mines = 60;
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
    const field = bombsCount(preArr);
    const avalFlags = field.filter(item => item.isBoom).length;
    return { field, count, avalFlags};
}
