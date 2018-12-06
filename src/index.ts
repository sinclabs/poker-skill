// import Furhat from '../../typescript-skill-framework/src/Furhat'
import { Card, suitLetterMaps } from './Card'
import cf from './cardFunctions'
import cardsData from './cardsData'
import { Player } from './Player'

// Declare the game data variables
class Game {
    deck: Array<Card>
    roundCount: number
    bank: number

    constructor() {
        // Create the deck
        this.deck = cardsData.map((cardData) => {
            let card: Card = cardData
            return card
        })
        
        this.roundCount = 0

        this.bank = 0

        this.deck.map(card => console.log(cf.getCardNotation(card, suitLetterMaps)))

        // Shuffle the deck
        this.deck = cf.shuffleDeck(this.deck)
    }

    deal(player: Player, numOfCards: number) {
        let playerHandDeck: Array<Card> = []
        let dealResult = cf.dealCards(this.deck, numOfCards)

        this.deck = dealResult.mainDeck
        playerHandDeck = dealResult.dealtDeck

        player.hand.concat(...playerHandDeck)
    }
}
 
let game = new Game()

