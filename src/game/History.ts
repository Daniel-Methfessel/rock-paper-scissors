import { Hand } from "./Hand"

export class History {
    private human: Hand[] = []

    public get size(): number { return this.human.length }

    public add(hand: Hand) { this.human.push(hand) }

    public getLast(n: number): Hand[] | undefined {
        // If the game didn't yet go on long enough: cannot fulfill the request.
        if (this.human.length < n) { return undefined }
        return this.human.slice(-n)
    }
}
