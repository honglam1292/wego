import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

import { Container } from "./styled";

const SearchBar = (): JSX.Element => {
  return (
    <Container>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input placeholder="Enter restaurant name"/>
    </Container>
  );
};

export default SearchBar;
