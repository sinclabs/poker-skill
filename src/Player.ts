import { Card } from "./Card";

export interface Player {
    id: string
    location: any
    name?: string
    bank: number
    hand: Array<Card>
}