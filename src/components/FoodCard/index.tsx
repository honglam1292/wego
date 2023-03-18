import {
  Container,
  FoodInfor,
  FoodName,
  Details,
  GreenText,
  CardContent,
  PromotionCard,
} from "./styled";
import { IFood } from "../../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
import { faPercent } from "@fortawesome/free-solid-svg-icons/faPercent";
import { Promotion } from "../../utils/constants";

interface IProps {
  food: IFood;
}
const FoodCard = ({ food }: IProps): JSX.Element => {
  const promotionInfor = (promotion: string) => {
    switch (promotion) {
      case Promotion.GIFT:
        return (
          <PromotionCard type={Promotion.GIFT}>
            <FontAwesomeIcon icon={faGift} />
          </PromotionCard>
        );
      case Promotion.DISCOUNT:
        return (
          <PromotionCard type={Promotion.DISCOUNT}>
            <FontAwesomeIcon icon={faPercent} />
          </PromotionCard>
        );
      case Promotion.BONUS:
        return <PromotionCard type={Promotion.BONUS}>1 + 1</PromotionCard>;
      default:
        return null;
    }
  };
  return (
    <Container>
      <CardContent>
        {promotionInfor(food.promotion)}
        <img src={food.imageUrl} alt={food.name} width="300px" height="200px" />
        <FoodInfor>
          <FoodName>{food.name}</FoodName>
        </FoodInfor>
        <FoodInfor>
          <Details>
            <FontAwesomeIcon icon={faStar} /> {food.rating.toFixed(1)}
          </Details>
          <Details>{`${food.minCookTime}-${food.maxCookTime}`} min</Details>
          {food.isNew && (
            <Details>
              <GreenText>New</GreenText>
            </Details>
          )}
        </FoodInfor>
      </CardContent>
    </Container>
  );
};

export default FoodCard;
