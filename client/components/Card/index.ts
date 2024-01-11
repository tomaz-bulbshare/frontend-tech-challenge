import { Card } from "./Card";
import { Placeholder } from "./Placeholder";

type ExtendedCard = typeof Card & {
  Placeholder: typeof Placeholder;
};

const EnhancedCard = Card as ExtendedCard;
EnhancedCard.Placeholder = Placeholder;

export { EnhancedCard as Card };
