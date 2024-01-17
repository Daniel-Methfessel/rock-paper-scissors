namespace Demo
{
   public class LangItem
    {
        public Locale Locale { get; }
        public string Name { get; }

        public LangItem(
            Locale locale,
            string name
        )
        {
            this.Locale = locale;
            this.Name = name;
        }
    }

    public partial class About
    {
        public readonly LangItem[] LangItems = [
            new LangItem(Locale.En, "English"),
            new LangItem(Locale.De, "Deutsch"),
            new LangItem(Locale.Fr, "Français")
        ];
    }
}