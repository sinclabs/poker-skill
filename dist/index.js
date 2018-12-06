"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Furhat from '../../typescript-skill-framework/src/Furhat'
const Card_1 = require("./Card");
const cardFunctions_1 = __importDefault(require("./cardFunctions"));
const cardsData_1 = __importDefault(require("./cardsData"));
// Declare the game data variables
class Game {
    constructor(players) {
        // Create the deck
        this.deck = cardsData_1.default.map((cardData) => {
            let card = cardData;
            return card;
        });
        this.players = players;
        this.roundCount = 0;
        this.bank = 0;
        this.deck.map(card => console.log(cardFunctions_1.default.getCardNotation(card, Card_1.suitLetterMaps)));
        // Shuffle the deck
        this.deck = cardFunctions_1.default.shuffleDeck(this.deck);
    }
}
let game = new Game([]);
//# sourceMappingURL=index.js.map