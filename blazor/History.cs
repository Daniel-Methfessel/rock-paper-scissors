namespace Demo
{
    public class History
    {
        private readonly List<Hand> Human = new List<Hand>();

        public int Size
        {
            get { return this.Human.Count; }
        }

        public void add(Hand hand) { this.Human.Add(hand); }

        public Hand[] GetLast(int n)
        {
            // If the game didn't yet go on long enough: cannot fulfill the request.
            if (Size < n) { return new Hand[0]; }
            var result = new List<Hand>();
            for (var i = Size - n; i < Size; ++i)
            {
                result.Add(this.Human[i]);
            }
            return result.ToArray();
        }
    }
}