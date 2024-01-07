import { Hand } from "./Hand"
import { History } from "./History"
import { Model } from "./Model"

export class Robot {
    private readonly model = new Model()

    constructor(private readonly nGrams: number) { }

    public nextMove(model: History): Hand {
        const nGram = model.getLast(this.nGrams)

        // Too early in the game.
        if (!nGram) { return this.fallback() }

        const prediction = this.model.get(nGram)
        if (!prediction) { return this.fallback() }

        switch (prediction) {
            case Hand.Rock: return Hand.Paper
            case Hand.Paper: return Hand.Scissors
            case Hand.Scissors: return Hand.Rock
            default: return Hand.Rock
        }
    }

    public updateModel(model: History, hand: Hand): void {
        const nGram = model.getLast(this.nGrams)
        if (nGram) { this.model.add(nGram, hand) }
    }

    private fallback(): Hand {
        return [Hand.Rock, Hand.Paper, Hand.Scissors][Math.floor(Math.random() * 3)]
    }
}
