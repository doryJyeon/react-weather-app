import styled from "styled-components";
import { InnerContainer } from "../../Container.styles";

export const TempClothesWrapper = styled(InnerContainer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 5px;

  @media (max-width: 980px) {

    > img {

    }
  }
`;

export const ClothesIconWrapper = styled.div`

`

export const TempCommentWrapper = styled.div`
  margin-left: auto;
`