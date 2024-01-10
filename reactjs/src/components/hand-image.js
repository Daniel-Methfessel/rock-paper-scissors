import { useTranslation } from "react-i18next";
import { Hand } from '../game/hand';
import './hand-image.scss';

export default function HandImage({ hand, isPlayer }) {
    const { t } = useTranslation();

    const isClickable = !isPlayer
    const cssClass = isClickable ? 'clickable' : 'choosen'
    const hideImage = () => !hand

    const label = () => {
        if (!hand) { return '' }

        if (!isClickable) { return hand.toString() }

        switch (hand) {
            case Hand.Rock:
                return "rock (press '1')"
            case Hand.Paper:
                return "paper (press '2')"
            case Hand.Scissors:
                return "scissors (press '3')"
            default:
                return ''
        }
    }

    const source = () => {
        switch (hand ?? '') {
            case Hand.Rock: return '/rock.svg?url'
            case Hand.Paper: return '/paper.svg?url'
            case Hand.Scissors: return '/scissors.svg?url'
            // need to return a value so :hidden takes space.
            default: return '/scissors.svg?url'
        }
    }

    return (
        <img className={cssClass} style={hideImage() ? { 'visibility': 'hidden' } : undefined} src={source()}
            alt={label() ? t(label()) : undefined} title={label() ? t(label()) : undefined} />
    )
}