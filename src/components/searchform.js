import React, { useState } from "react";
import styled, { css } from "styled-components";
const SearchDiv = styled.div`
  display: flex;
  flexwrap: nowrap;
  padding-left: 65vw;
  padding-top: 5vh;
  position: fixed;
  z-index: 999;
  color: white;
  white-space: nowrap;
  font-weight: bold;
  font-family: "Script MT";
`;
const SearchContainer = styled.div`
  padding: 2%;
  font-family: "Script MT";
`;
const SButton = styled.button`
  background: forestgreen;
  min-height: 3vh;
  min-width: 8vw;
  border: 1px solid forestgreen;
  border-radius: 3px;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  font-family: "Script MT";
  ${props =>
    props.primary &&
    css`
      background: Purple;
      border: 1px solid Purple;
    `}

  ${props =>
    props.tertiary &&
    css`
      background: red;
      border: 1px solid red;
    `}
`;
export default function SearchForm(props) {
  const [searchCriteria, setSearchCriteria] = useState({ criteria: "" });

  const handleChange = event => {
    setSearchCriteria({
      ...searchCriteria,

      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.setNameToSearch(searchCriteria.criteria);

    setSearchCriteria({ criteria: "" });
  };

  return (
    <SearchContainer>
      <SearchDiv>
        <form onSubmit={handleSubmit}>
          <label htmlFor="criteria">Search: </label>
          <input
            id="criteria"
            value={searchCriteria.criteria}
            onChange={handleChange}
            placeholder="Search"
            name="criteria"
            type="text"
          />
          <SButton primary> Submit </SButton>
        </form>
      </SearchDiv>
    </SearchContainer>
  );
}
