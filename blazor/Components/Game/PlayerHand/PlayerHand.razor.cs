namespace Demo
{
    public partial class PlayerHand
    {
        public string? CssClass  {
            get {
                return Player is null ? null
                    : Player.wonLastGame ? "winner"
                        : Player.lostLastGame ? "loser"
                            : "tie";
            }
        }
    }
}