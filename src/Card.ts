export let HEARTS = 'hearts'
export let SPADES = 'spades'
export let DIAMONDS = 'diamonds'
export let CLUBS = 'clubs'

export const suitLetterMaps = [
    { suit: HEARTS, letter: 'h' },
    { suit: SPADES, letter: 's' },
    { suit: CLUBS, letter: 'c' },
    { suit: DIAMONDS, letter: 'd' },
]

export interface Card {
    suit: string
    value: string | number
}