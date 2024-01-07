import { Hand, handBeats } from "./Hand"
import { Robot } from "./Robot"
import { History } from "./History"
import { Player } from "./Player"
import { ref } from "vue"

export class Game {
    public human: Player
    public robot: Player

    private gamesPlayed = ref(0)

    public history: History

    public opponent: Robot

    constructor() {
        const nGrams = 20
        this.history = new History()
        this.opponent = new Robot(nGrams)

        this.human = new Player(this.gamesPlayed)
        this.robot = new Player(this.gamesPlayed)
    }

    public play(human: Hand) {
        this.robot.hand.value = this.opponent.nextMove(this.history)
        this.human.hand.value = human

        // Only after the robot made his choice he can see the choice the human made.
        this.opponent.updateModel(this.history, human)
        // Adding to the history only after the robot learned from it!
        this.history.add(human)

        // Scoring.
        ++this.gamesPlayed.value
        if (this.human != this.robot) {
            if (handBeats(this.human.hand.value, this.robot.hand.value)) {
                ++this.human.score.value
            } else {
                ++this.robot.score.value
            }
        }
    }
}
