import styled from "styled-components";
import { Container } from "../../Container.styles";

export const HomeWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 980px) {
    box-sizing: border-box;
    width: 100vw;
  }

  > p:last-of-type {
    font-size: 0.8rem;
    color: white;
  }
`;

export const ThisDayBlock = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 1050px) {
    gap: 30px;
  }

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 20px;
  }
`;
