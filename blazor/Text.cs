namespace Demo
{
    // Doing everything for the fourth time,
    // and Blazor does everything completely different,
    // so at this point I'm to lazy to include a proper i18n library.
    public static class Text
    {
        private static Dictionary<Locale, string> Create(
            string en,
            string de,
            string fr) => new Dictionary<Locale, string>{
                {Locale.En, en},
                {Locale.De, de},
                {Locale.Fr, fr}
            };

        public static readonly Dictionary<Locale, string> RockName = Create(
        "rock",
        "Stein",
        "pierre");
        public static readonly Dictionary<Locale, string> PaperName = Create(
        "paper",
        "Papier",
        "papier");
        public static readonly Dictionary<Locale, string> ScissorsName = Create(
        "scissors",
        "Schere",
        "ciseaux");

        public static readonly Dictionary<Locale, string> RockKey = Create(
        "rock (press '1')",
        "Stein (drücke '1')",
        "pierre (pousser '1')");
        public static readonly Dictionary<Locale, string> PaperKey = Create(
        "paper (press '2')",
        "Papier (drücke '2')",
        "papier (pousser '3')");
        public static readonly Dictionary<Locale, string> ScissorsKey = Create(
        "scissors (press '3')",
        "Schere (drücke '3')",
        "ciseaux (pousser '3')");

        public static readonly Dictionary<Locale, string> Title = Create(
        "Rock, Paper, Scissors",
        "Stein, Schere, Papier",
        "Pierre, papier, ciseaux");
        public static readonly Dictionary<Locale, string> Description = Create(
        "A rock-paper-scissors game against a computer opponent.",
        "Ein Stein-Schere-Papier-Spiel gegen einen Computergegner.",
        "Un jeu pierre-feuille-ciseaux contre un adversaire informatique.");
        public static readonly Dictionary<Locale, string> Play = Create(
        "Play!",
        "Spiel starten!",
        "Jouer!");

        public static readonly Dictionary<Locale, string> AlternativesTitle = Create(
        "Alternative frontend frameworks",
        "Alternative Frontend-Frameworks",
        "Frameworks frontaux alternatifs");
        public static readonly Dictionary<Locale, string> AlternativesDescription = Create(
        "This simple application is also implemented in other frontend frameworks:",
        "Diese einfache Anwendung ist auch in anderen Frontend-Frameworks implementiert:",
        "Cette application simple est également implémentée dans d'autres frameworks frontend :");

        public static readonly Dictionary<Locale, string> References = Create(
        "References",
        "Verweise",
        "Références");
        public static readonly Dictionary<Locale, string> Concept = Create(
        "Concept",
        "Konzept",
        "Concept");
        public static readonly Dictionary<Locale, string> ThanksTo = Create(
        "Thanks to",
        "Danke an",
        "Merci à");
        public static readonly Dictionary<Locale, string> ForTheSuggestion = Create(
        "for the suggestion.",
        "für den Link.",
        "pour la suggestion.");

        public static readonly Dictionary<Locale, string> ImageSource = Create(
        "OpenClipArt.org: Source of the hand images.",
        "OpenClipArt.org: Quelle der Hand-Grafiken.",
        "OpenClipArt.org: Source des images des mains.");
        public static readonly Dictionary<Locale, string> GitHub = Create(
        "GitHub repository for the source code of this page.",
        "GitHub Repositorium für den Quellcode dieser Seite.",
        "Dépôt GitHub pour le code source de cette page.");
        public static readonly Dictionary<Locale, string> Com = Create(
        "com",
        "de",
        "fr");
        public static readonly Dictionary<Locale, string> MyWebsite = Create(
        "My website.",
        "Meine Webseite.",
        "Mon site web.");

        public static readonly Dictionary<Locale, string> Error = Create(
        "The requested resource could not be found.",
        "Die angefragte Ressource konnte nicht gefunden werden.",
        "La ressource demandée est introuvable.");
    }

    public static class TextExtensions
    {
        public static string Translate(this Dictionary<Locale, string> symbol) =>
            symbol[CurrentLocale.Selected];
    }
}