import './player-hand.scss';
import HandImage from "./hand-image"

export default function PlayerHand({ player }) {
    const cssClass = () => {
        const wonLastGame = player.wonLastGame
        const lostLastGame = player.lostLastGame
        return wonLastGame ? 'winner'
            : lostLastGame ? 'loser'
                : 'tie'
    }

    return (
        <div className="player">
            <div className={cssClass()}>
                <HandImage hand={player.hand} isPlayer={true} />
            </div>
            <p className="score">{player.percentage()}</p>
        </div>
    )
}