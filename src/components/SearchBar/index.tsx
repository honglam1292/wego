import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import { Container } from "./styled";

interface ISearchBar {
  handleSearch: (search: string) => void;
}
const SearchBar = ({ handleSearch }: ISearchBar): JSX.Element => {
  return (
    <Container>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        placeholder="Enter restaurant name"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
