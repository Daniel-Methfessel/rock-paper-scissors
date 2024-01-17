namespace Demo
{
    public partial class RockPaperScissors
    {
        public readonly Game gameState = new Game();

        public void HandClicked(Hand hand)
        {
            gameState.Play(hand);
        }
    }
}
