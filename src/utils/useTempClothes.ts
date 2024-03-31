import { useEffect, useState } from "react"
import clothesData from "../components/TempClothes/data"

// 기온에 맞는 옷 추천
const useTempClothes = (min: number, max: number) => {
  const [temp, setTemp] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if(min < 5) {
      setTemp(0);
    } else if(min < 9) {
      setTemp(5);
      max < 12 && setComment("낮에는 따듯해요!");
    } else if(min < 12) {
      setTemp(12);
      max < 17 && setComment("따듯한 낮에 벗을 수 있도록 외투를 챙겨 입는 걸 추천해요!");
    } else if(min < 17) {
      setTemp(17);
      max < 20 && setComment("낮에 더울 수 있으니 얇은 옷을 겹쳐 입는 걸 추천해요!");
    } else if(min < 20) {
      setTemp(20);
      max < 23 && setComment("낮에 활동하면 더울 수 있으니 얇은 옷이나 반팔에 외투 입는 걸 추천해요!");
    } else if(min < 23) {
      setTemp(23);
      max < 28 && setComment("낮에 정말 뜨거워요! 더위 조심하세요!!");
    } else {
      setTemp(28);
    }
  }, [min, max])

  return {
    temp,
    comment,
    season: clothesData[temp.toString()][0],
    clothes: clothesData[temp.toString()][1]
  }
}

export default useTempClothes