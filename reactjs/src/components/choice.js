import './choice.scss';
import HandImage from './hand-image'
import { Hand } from '../game/hand'

export default function Choice({ onClick }) {
    return (
        <div className="choice">
            <div className="hand" onClick={() => onClick(Hand.Rock)}>
                <HandImage hand={Hand.Rock} isPlayer={false} />
            </div>
            <div className="hand" onClick={() => onClick(Hand.Paper)}>
                <HandImage hand={Hand.Paper} isPlayer={false} />
            </div>
            <div className="hand" onClick={() => onClick(Hand.Scissors)}>
                <HandImage hand={Hand.Scissors} isPlayer={false} />
            </div>
        </div>
    )
}