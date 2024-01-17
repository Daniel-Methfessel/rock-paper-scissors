using Microsoft.AspNetCore.Components;

namespace Demo
{
    public partial class HandImage
    {
        public bool IsClickable => !IsPlayer;

        public string CssClass =>
        (IsClickable ? "clickable" : "choosen")
        + (HideImage ? "hidden-image" : "");

        public bool HideImage => this.Hand is null;

        // TODO: translate.
        public string Label
        {
            get
            {
                if (Hand is null) { return ""; }

                if (!IsClickable)
                {
                    switch (this.Hand)
                    {
                        case Demo.Hand.Rock:
                            return Text.RockName.Translate();
                        case Demo.Hand.Paper:
                            return Text.PaperName.Translate();
                        case Demo.Hand.Scissors:
                            return Text.ScissorsName.Translate();
                        default:
                            return "";
                    }
                }

                switch (this.Hand)
                {
                    case Demo.Hand.Rock:
                        return Text.RockKey.Translate();
                    case Demo.Hand.Paper:
                        return Text.PaperKey.Translate();
                    case Demo.Hand.Scissors:
                        return Text.ScissorsKey.Translate();
                    default:
                        return "";
                }
            }
        }

        public string Source
        {
            get
            {
                // need to return a value so :hidden takes space.
                switch (this.Hand ?? Demo.Hand.Scissors)
                {
                    case Demo.Hand.Rock: return "/rock.svg?url";
                    case Demo.Hand.Paper: return "/paper.svg?url";
                    case Demo.Hand.Scissors: return "/scissors.svg?url";
                    // need to return a value so :hidden takes space.
                    default: return "/scissors.svg?url";
                }
            }
        }
    }
}
