export default (arr) => {
    const bombsId = arr.filter(item => item.isBoom).map(item => item.id);
    const diff = arr.length - bombsId.length;
    const result = arr.filter(item => !bombsId.includes(item.id) && !item.isClosed);
    return result.length === diff;
}