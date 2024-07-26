import styled from "styled-components";
import { Container } from "../../Container.styles";

export const HeaderWrapper = styled(Container)`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    margin-top: 1vh;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  h2 {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    text-transform: uppercase;
    color: #4793ff;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  position: relative;

  .react-select-container {
    width: 200px;
  }
  .react-select__control {
    border-radius: 20px;
  }

  .react-select__placeholder {
    color: #939cb0;
    font-weight: 300;
    font-size: 18px;
  }
  .react-select__value-container {
    padding: 4px 12px;
  }

  @media (max-width: 980px) {
    .react-select-container {
      width: 350px;
    }
  }
`;

export const OpenWeatherDesc = styled.div`
  display: none;
  position: absolute;
  width: auto;
  padding: 5px 15px;
  text-align: center;
  background-color: #000000aa;
  border-radius: 4px;
  font-size: .8rem;
  color: #fff;
  top: 0;
  margin-top: -36px;

  &.show {
    display: block;
  }

  // 말풍선 꼬리
  &::after {
    content: "";
    width: 0;
    height: 0;
    transform: rotate(-45deg);
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-bottom: -5px;
    margin-left: -5px;
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #000000aa;
    border-left: 5px solid #000000aa;
  }

  @media (max-width: 980px) {
    margin-right: 40px;
  }
`
