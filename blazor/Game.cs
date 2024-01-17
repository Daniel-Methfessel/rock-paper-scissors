namespace Demo
{
    public class Game
    {
        public readonly Player Human;
        public readonly Player Robot;

        private Score gamesPlayed = new Score();

        public int GamesPlayed { get { return gamesPlayed.Count; } }

        public readonly History history;

        public readonly Robot opponent;

        public Game()
        {
            const int nGrams = 20;
            this.history = new History();
            this.opponent = new Robot(nGrams);

            this.Human = new Player(this.gamesPlayed);
            this.Robot = new Player(this.gamesPlayed);
        }

        public void Play(Hand humanHand)
        {
            var robotHand = this.opponent.NextMove(this.history);
            this.Robot.Hand = robotHand;
            this.Human.Hand = humanHand;

            // Only after the robot made his choice he can see the choice the human made.
            this.opponent.UpdateModel(this.history, humanHand);
            this.history.add(humanHand);

            // Scoring.
            ++this.gamesPlayed.Count;
            if (robotHand == humanHand)
            {
                this.Human.tie();
                this.Robot.tie();
            }
            else if (humanHand.Beats(robotHand))
            {
                this.Human.win();
                this.Robot.lose();
            }
            else
            {
                this.Human.lose();
                this.Robot.win();
            }
        }
    }
}