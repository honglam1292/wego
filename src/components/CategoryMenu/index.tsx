import { Container } from "./styled";
import { ICategoryMenu } from "../../utils/types";

const CategoryMenu = ({
  categories,
  selectedCategoryID,
  setSelectedCategoryID,
}: ICategoryMenu): JSX.Element => {
  return (
    <Container>
      {categories?.map((category) => {
        return (
          <span
            className={`button ${
              category.id === selectedCategoryID ? "active" : ""
            }`}
            onClick={() => setSelectedCategoryID(category.id)}
          >
            {category.name}
          </span>
        );
      })}
    </Container>
  );
};

export default CategoryMenu;
