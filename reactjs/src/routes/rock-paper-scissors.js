import { Hand } from "../game/hand";
import PlayerHand from "../components/player-hand"
import TheChoice from "../components/choice"
import { Game } from "../game/game";

import './rock-paper-scissors.scss';
import { useState } from "react";

const gameState = new Game()

let onClick = undefined

const onKey = function (event) {
    if (!onClick) { return }

    switch (event.key) {
        case '1':
            onClick(Hand.Rock)
            break
        case '2':
            onClick(Hand.Paper)
            break
        case '3':
            onClick(Hand.Scissors)
            break
        default:
            break
    }
}

document.addEventListener('keypress', onKey)

export default function RockPaperScissors() {

    // Dirty way to trigger re-rendering.
    const [gamesPlayed, setGamesPlayed] = useState(0)

    onClick = function (hand) {
        gameState.play(hand)
        setGamesPlayed(gamesPlayed + 1)
    }

    return (
        <div className="rps-content">
            <div className="result">
                <PlayerHand player={gameState.human} />
                <PlayerHand player={gameState.robot} />
            </div>

            <TheChoice onClick={onClick} />
        </div>
    )
}