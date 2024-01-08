export enum Hand {
    Rock = 'rock',
    Paper = 'paper',
    Scissors = 'scissors',
}

// If the hand beats the other.
// If false then this may be a tie.
export function handBeats(x: Hand, y: Hand): boolean {
    switch (x) {
        case Hand.Rock: return Hand.Scissors == y
        case Hand.Paper: return Hand.Rock == y
        case Hand.Scissors: return Hand.Paper == y
    }
}
