export default (arr, bombsCount) => {
    const len = arr.length;
    let bombsIds = [];
    while (bombsCount) {
        const id = Math.floor(Math.random() * len);
        if (!bombsIds.includes(id)) {
            bombsIds.push(id);
            const cell = arr[id];
            arr[id] = { ...cell, isBoom: true };
            bombsCount--;
        }
    }
    return arr;
};
