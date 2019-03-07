import getIcon from '../utils/getIcon';

export default ({ num, note }) => {
    let cellNum, cellNote;
    switch (num) {
        case '*':
            cellNum = note === 'flag' ? getIcon(['bomb', 'x']) : getIcon('bomb');
            break;
        default:
            cellNum = num;
    }
    switch (note) {
        case 'flag':
            cellNote = getIcon('flag');
            break;
        case 'idk':
            cellNote = '?';
            break;
        default:
            cellNote = null;
    }
    return { cellNum, cellNote };
}