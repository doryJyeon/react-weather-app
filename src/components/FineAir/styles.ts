import styled from "styled-components";
import { InnerContainer } from "../../Container.styles";

export const FineAirWrapper = styled(InnerContainer)`
  display: flex;
  align-items: center;
  gap: 12px;

  > span {
    margin-right: 10px;
    font-size: 0.95rem;
    text-align: center;
    color: #333;

    > span {
      font-size: 1.2rem;
      font-weight: bold;
    }
    > span.best {
      color: #4793ff;
    }
    > span.good {
      color: forestgreen;
    }
    > span.bad {
      color: darkorange;
    }
    > span.mask {
      color: red;
    }
  }
  > img {
    max-width: 51px;
  }
  > img:last-of-type {
    transform: scaleX(-1);
  }
  > span:last-of-type {
    margin-right: 0;
  }

  
  @media (max-width: 1050px) {
    gap: 10px;

    > span {
      font-size: 0.8rem;
      margin-right: 0;
  
      > span {
        font-size: 0.95rem;
      }
    }
    > span:last-of-type {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 980px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 500px) {
    > img {
      width: 40px;
    }
  }
`;

export const AirComponents = styled.div`
  margin-left: auto;
  
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  align-items: center;
  gap: 10px;

  @media (max-width: 980px) {
    margin-left: 0;
    grid-template-columns: repeat(4, 2fr);
  }
  `
  export const AirComponent = styled.div`
  background-color: #efefef;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;

  > p:last-of-type {
    margin-top: 5px;
    color: #333;
    font-size: 0.95rem;
    font-weight: 500;
  }
  
  
  @media (max-width: 1050px) {
    font-size: 0.9rem;

    > p:last-of-type {
      font-size: 0.8rem;
    }
  }
`