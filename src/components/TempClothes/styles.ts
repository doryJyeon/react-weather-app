import styled from "styled-components";
import { InnerContainer } from "../../Container.styles";

export const TempClothesWrapper = styled(InnerContainer)`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 980px) {
    gap: 0;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ClothesIconWrapper = styled.div`
  > img {
    width: 56px;
    margin-left: 10px;
  }
  
  @media (max-width: 980px) {
    display: flex;
    justify-content: center;

    > img {
      margin: 10px;
    }
  }
`

export const TempCommentWrapper = styled.div`
  margin-right: auto;

  > .season {
    font-size: .8rem;
    color: #666;
  }

  > .clothes {
    color: #222;
    font-size: 1rem;
    margin-top: 4px;
  }

  > .comment {
    color: #666;
    font-size: 0.9rem;
  }
  
  @media (max-width: 980px) {
    margin-right: 0;
    margin-bottom: 10px;
    text-align: center;

    > p {
      margin: 0;
    }
  }
`