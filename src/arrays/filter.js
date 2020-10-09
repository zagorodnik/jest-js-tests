const filter = (words) => {
    return words.filter(word => word.length > 6);
}

module.exports = filter;