import { Hand } from "./Hand"

export class Model {
    private readonly model = new Map<string, Map<Hand, number>>()

    public get(item: Hand[]): Hand | undefined {
        const key = this.toKey(item)
        const map = this.model.get(key)
        if (!map) { return undefined }

        // Suchen die Hand, die bei diesem Muster am häufigsten als letztes kam.
        let result: Hand | undefined
        let count = 0
        for (const key of Object.values(Hand)) {
            const value = map.get(key) ?? 0
            if (count < value) {
                count = value
                result = key
            }
        }

        return result
    }

    public add(item: Hand[], next: Hand) {
        const key = this.toKey(item)

        this.model.set(
            key,
            this.updateItem(
                next,
                this.model.get(key) ?? new Map<Hand, number>()
            ))
    }

    private updateItem(hand: Hand, map: Map<Hand, number>): Map<Hand, number> {
        map.set(hand, (map.get(hand) ?? 0) + 1)

        return map
    }

    private toKey(nGram: Hand[]): string { return nGram.map(h => h.toString()).reduce((x, y) => x + y) }
}
