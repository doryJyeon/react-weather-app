import { ClothesIconWrapper, TempClothesWrapper, TempCommentWrapper } from "./styles";
import useTempClothes from "../../utils/useTempClothes";

interface Props {
  tempMin: number;
  tempMax: number;
}

const TempClothes = ({tempMin, tempMax}: Props) => {
  const { temp, comment, season, clothes } = useTempClothes(tempMin, tempMax);
  
  return (
    <TempClothesWrapper key={"TempClothesWrapper"}>
      <ClothesIconWrapper>
        <img src={`/images/clothes/temperature_${temp}_0.png`} alt="clothes" />
        <img src={`/images/clothes/temperature_${temp}_1.png`} alt="clothes" />
        <img src={`/images/clothes/temperature_${temp}_2.png`} alt="clothes" />
      </ClothesIconWrapper>

      <TempCommentWrapper>
        <p>{season}</p>
        <p>{clothes}</p>
        <p>{comment}</p>
      </TempCommentWrapper>
    </TempClothesWrapper>
  );
};

export default TempClothes;
