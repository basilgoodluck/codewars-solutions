String.prototype.toJadenCase = function () {
    //...
    const words = this.split(" ");
    const jadenCasedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    const jadenCasedSentence = jadenCasedWords.join(" ");
    return jadenCasedSentence;
};

