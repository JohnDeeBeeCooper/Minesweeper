const bombsAlignment = (maxId: number, bombsCount: number) => {
    let bombsIds: number[] = [];
    while (bombsCount) {
        const id = Math.floor(Math.random() * maxId);
        if (!bombsIds.includes(id)) {
            bombsIds.push(id);
            bombsCount--;
        }
    }
    return bombsIds;
};

export default bombsAlignment;