import React from "react";
import styled from "styled-components";
import RecomendationsList from "./RecomendationsList";
const RecomendationsContainer = styled.section`
  font-size: 1rem;
  min-height: 100%;
  min-width: 80%;
  padding-left: 12vw;
  padding-top: 16vh;
  p {
    text-align: left;
    font-weight: bold;
    padding: 0 1%;
  }
`;
export default function Recomendations() {
  return (
    <RecomendationsContainer>
      <RecomendationsList />
    </RecomendationsContainer>
  );
}
