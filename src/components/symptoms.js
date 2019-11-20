import React from "react";
import styled from "styled-components";
import SymptomsForm from "./SymptomsForm";

const SymptomsContainer = styled.section `
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  background-image: url("../../Logo.png");
  opacity: 0.5;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
`;
const SFormContainer = styled.section `
  font-size: 1rem;
  padding:2%
  text-align:center;
`;

export default function Symptoms() {
    return ( <
        SymptomsContainer >
        <
        h1 > Hello < /h1> <p> Please Select your Symptoms below: </p >
        <
        SFormContainer >
        <
        SymptomsForm / >
        <
        /SFormContainer>{" "} <
        /SymptomsContainer>
    );
}