namespace Demo
{
    public enum Hand
    {
        Rock,
        Paper,
        Scissors,
    }

    // If the hand beats the other.
    // If false then this may be a tie.
    public static class HandExtensions
    {
        public static bool Beats(this Hand x, Hand y)
        {
            switch (x)
            {
                case Hand.Rock: return Hand.Scissors == y;
                case Hand.Paper: return Hand.Rock == y;
                case Hand.Scissors: return Hand.Paper == y;
            }

            return false;
        }
    }
}