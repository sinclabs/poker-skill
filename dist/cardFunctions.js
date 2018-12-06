"use strict";
/* Method to shuffle a card deck
** Implements Knuth Shuffle algorithm
*/
let shuffleDeck = (incomingDeck) => {
    let currentIndex = incomingDeck.length, temporaryValue, randomIndex;
    let newDeck = incomingDeck;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = newDeck[currentIndex];
        newDeck[currentIndex] = newDeck[randomIndex];
        newDeck[randomIndex] = temporaryValue;
    }
    return newDeck;
};
/* Method to get the shorthand card notation
** Returns a shorthand format of pokersolver library - https://github.com/goldfire/pokersolver
*/
let getCardNotation = (card, suitLetterMaps) => {
    let suitLetter;
    let valueLetter;
    let suit = suitLetterMaps.filter((suitLetterMap) => suitLetterMap.suit === card.suit);
    suitLetter = suit[0].letter;
    if (card.value != 10) {
        valueLetter = card.value;
        if (typeof valueLetter === 'string') {
            valueLetter = valueLetter.toUpperCase();
        }
    }
    else {
        valueLetter = 'T';
    }
    return valueLetter + suitLetter;
};
module.exports = {
    shuffleDeck,
    getCardNotation
};
//# sourceMappingURL=cardFunctions.js.map