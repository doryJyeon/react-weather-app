import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  height: fit-content;
  width: 90%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 980px) {
    max-width: 550px;
    width: 90%;
  }
`;

export const InnerContainer = styled(Container)`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  min-height: 100px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
  rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`