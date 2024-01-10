import { Hand, handBeats } from "./hand"
import { Robot } from "./robot"
import { History } from "./history"
import { Player } from "./player"
import { signal } from "@angular/core"

export class Game {
    public human: Player
    public robot: Player

    private gamesPlayed = signal(0)

    public history: History

    public opponent: Robot

    constructor() {
        const nGrams = 20
        this.history = new History()
        this.opponent = new Robot(nGrams)

        this.human = new Player(this.gamesPlayed)
        this.robot = new Player(this.gamesPlayed)
    }

    public play(humanHand: Hand) {
        const robotHand = this.opponent.nextMove(this.history)
        this.robot.hand.set(robotHand)
        this.human.hand.set(humanHand)

        // Only after the robot made his choice he can see the choice the human made.
        this.opponent.updateModel(this.history, humanHand)
        this.history.add(humanHand)

        // Scoring.
        this.gamesPlayed.set(this.gamesPlayed() + 1)
        if (this.human != this.robot) {
            const humanHand = this.human.hand()
            const robotHand = this.robot.hand()
            if (robotHand && humanHand) {
                if (robotHand == humanHand) {
                    this.human.tie()
                    this.robot.tie()
                } else if (handBeats(humanHand, robotHand)) {
                    this.human.win()
                    this.robot.lose()
                } else {
                    this.human.lose()
                    this.robot.win()
                }
            }
        }
    }
}
