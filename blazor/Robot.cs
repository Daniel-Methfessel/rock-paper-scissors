namespace Demo
{
    public class Robot
    {
        private readonly Model model = new Model();
        private readonly int nGrams;
        private readonly Random random = new Random();

        public Robot(int nGrams)
        {
            this.nGrams = nGrams;
        }

        public Hand NextMove(History model)
        {
            var nGram = model.GetLast(this.nGrams);

            // Too early in the game.
            if (0 == nGram.Length) { return this.Fallback(); }

            var prediction = this.model.Get(nGram);
            if (prediction is null) { return this.Fallback(); }

            switch (prediction)
            {
                case Hand.Rock: return Hand.Paper;
                case Hand.Paper: return Hand.Scissors;
                case Hand.Scissors: return Hand.Rock;
                default: return Hand.Rock;
            }
        }

        public void UpdateModel(History model, Hand hand)
        {
            var nGram = model.GetLast(this.nGrams);
            if (0 < nGram.Length) { this.model.Add(nGram, hand); }
        }

        private readonly Hand[] hands = new[] { Hand.Rock, Hand.Paper, Hand.Scissors };

        private Hand Fallback()
        {
            return this.hands[(int)this.random.Next(3)];
        }
    }
}