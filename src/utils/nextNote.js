export default (note, frbdn) => {
    if (note === '') {
        return frbdn ? 'idk' : 'flag';
    }
    else if (note === 'idk') {
        return ''
    }
    else {
        return 'idk';
    }
}