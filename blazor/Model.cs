namespace Demo
{
    public class Model
    {
        private readonly Dictionary<string, Dictionary<Hand, int>> model = new Dictionary<string, Dictionary<Hand, int>>();

        public Hand? Get(Hand[] item)
        {
            var key = this.ToKey(item);

            if (!this.model.TryGetValue(key, out var map))
            {
                return null;
            }

            // Suchen die Hand, die bei diesem Muster am häufigsten als letztes kam.
            Hand? result = null;
            var count = 0;
            foreach (Hand hand in Enum.GetValues(typeof(Hand)))
            {
                if (map.TryGetValue(hand, out var value)
                && count < value)
                {
                    count = value;
                    result = hand;
                }
            }

            return result;
        }

        public void Add(Hand[] item, Hand next)
        {
            var key = this.ToKey(item);

            if (!this.model.TryGetValue(key, out var map))
            {
                map = new Dictionary<Hand, int>();
            }

            this.model[key] = this.UpdateItem(next, map);
        }

        private Dictionary<Hand, int> UpdateItem(Hand hand, Dictionary<Hand, int> map)
        {
            if (!map.ContainsKey(hand))
            {
                map[hand] = 1;
            }
            else
            {
                ++map[hand];
            }

            return map;
        }

        private string ToKey(Hand[] nGram)
        {
            return nGram.Select(h => h.ToString()[0])
               .Aggregate(new System.Text.StringBuilder(), (x, y) => x.Append(y)).ToString();
        }
    }
}