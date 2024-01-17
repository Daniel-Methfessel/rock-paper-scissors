namespace Demo
{
    public class Player
    {
        public Hand? Hand = null;

        public int score = 0;
        public bool wonLastGame = false;
        public bool lostLastGame = false;

        private readonly Score gamesPlayed;

        public string Percentage
        {
            get
            {
                return 0 < this.gamesPlayed.Count
                 ? Math.Round(this.score * 100.0 / gamesPlayed.Count) + "%"
                 : "0%";
            }
        }

        public Player(Score gamesPlayed)
        {
            this.gamesPlayed = gamesPlayed;
        }

        public void win()
        {
            ++this.score;
            this.wonLastGame = true;
            this.lostLastGame = false;
        }

        public void lose()
        {
            this.wonLastGame = false;
            this.lostLastGame = true;
        }

        public void tie()
        {
            this.wonLastGame = false;
            this.lostLastGame = false;
        }
    }
}