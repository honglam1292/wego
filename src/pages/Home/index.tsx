import React, { useState } from "react";
import { useGet } from "../../utils/hooks";
import { Container, ResponsiveContent, ShowMore } from "./styled";
import SearchBar from "../../components/SearchBar";
import CategoryMenu from "../../components/CategoryMenu";
import Loading from "../../components/Loading";
import FoodCard from "../../components/FoodCard";
import { IFood } from "../../utils/types";
import {
  INCREMENTAL_CARD,
  GET_CATEGORIES_URL,
  GET_FOODS_URL,
} from "../../utils/constants";

const Home = (): JSX.Element => {
  console.log("---------------------", useGet(GET_CATEGORIES_URL));
  const [categories] = useGet(GET_CATEGORIES_URL);
  const [foods] = useGet(GET_FOODS_URL);
  const [selectedCategoryID, setSelectedCategoryID] = useState("all");
  const [totalCard, setTotalCard] = useState(INCREMENTAL_CARD);

  const handleChangeCategory = (id: string) => {
    setTotalCard(INCREMENTAL_CARD);
    setSelectedCategoryID(id);
  };

  if (!categories || !foods) return <Loading />;
  const listFoodByCategory = foods.filter(
    (food: IFood) =>
      selectedCategoryID === "all" || food.categoryId === selectedCategoryID
  );
  return (
    <Container>
      <SearchBar />
      <CategoryMenu
        categories={[
          {
            name: "All",
            id: "all",
          },
          ...categories,
        ]}
        selectedCategoryID={selectedCategoryID}
        setSelectedCategoryID={handleChangeCategory}
      />
      <div>
        {listFoodByCategory.slice(0, totalCard).map((food: IFood) => (
          <ResponsiveContent key={food.id}>
            <FoodCard food={food} />
          </ResponsiveContent>
        ))}
      </div>
      {totalCard < listFoodByCategory.length && (
        <ShowMore onClick={() => setTotalCard(totalCard + INCREMENTAL_CARD)}>
          Show More
        </ShowMore>
      )}
    </Container>
  );
};

export default Home;
