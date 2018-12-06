import { Card, HEARTS, SPADES, CLUBS, DIAMONDS } from './Card'

/* Method to shuffle a card deck
** Implements Knuth Shuffle algorithm
*/
let shuffleDeck = (incomingDeck: Array<Card>) => {
    let currentIndex = incomingDeck.length, temporaryValue, randomIndex;
    let newDeck: Array<Card> = incomingDeck

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
}

/* Method to get the shorthand card notation 
** Returns a shorthand format of pokersolver library - https://github.com/goldfire/pokersolver
*/
let getCardNotation = (card: Card, suitLetterMaps: any) => {
    let suitLetter: string
    let valueLetter: string

    let suit = suitLetterMaps.filter((suitLetterMap: any) => suitLetterMap.suit === card.suit)
    suitLetter = suit[0].letter

    if(card.value != 10) {
        valueLetter = (card.value as string)
        if(typeof valueLetter === 'string') {
            valueLetter = valueLetter.toUpperCase()
        } 
    } else {
        valueLetter = 'T'
    }

    return valueLetter + suitLetter
}

export = {
    shuffleDeck,
    getCardNotation
}


