export default (note) => {
    if(note === ''){
        return 'flag';
    }
    else if (note === 'idk'){
        return ''
    }
    else{
        return 'idk';
    }
}