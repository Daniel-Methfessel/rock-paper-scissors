namespace Demo
{
    public enum Locale
    {
        De,
        En,
        Fr
    }

    public static class CurrentLocale
    {
        public static Locale Selected {get; set;}
    }
}