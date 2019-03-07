import algmnt from './algmnt';
import bombsCount from './bombsCount';
import fillArray from './fillArray';

export default (difficult, manual) => {
    let arr = [];
    let count = 0;
    let mines = 0;
    if (!manual) {
        switch (difficult) {
            case 'very easy':
                count = 7;
                mines = 5;
                break;
            case 'easy':
                count = 10;
                mines = 20;
                break;
            case 'normal':
                count = 20;
                mines = 55;
                break;
            case 'hard':
                count = 25;
                mines = 99;
                break;
            case 'impossible':
                count = 30;
                mines = 777;
                break;
            default:
                console.log('aaeaeaeaeaeae');
                break;
        }
        arr = [count, count];
    }
    else {
        arr = [manual.w, manual.h];
        mines = manual.mines;
    }
    const preNewArr = fillArray(...arr);
    const preArr = algmnt(preNewArr, mines);
    const field = bombsCount(preArr);
    const avalFlags = mines;
    return { field, count, avalFlags };
}
