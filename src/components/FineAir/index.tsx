import { AirComponent, AirComponents, FineAirWrapper } from "./styles";
import useAirPollutionData from "../../utils/useAirPollutionData";

interface Components {
  [key:string]: number;
}

interface AirData {
  components: Components;
  fieAir: string;
  temp: number
}

const FineAir = () => {
  const { airData, loading, error } = useAirPollutionData();
  const airState = airData?.fineAir || "good";
  
  return (
    <FineAirWrapper key={"FineAirWrapper"}>
      { loading ? (
        "Loading..."
      ) : (
        error === true? (
          `Error... ;(`
        ) : (
          <>
            <span>대기질<br/><span className={airState}>{airState}</span></span>
            <img 
              src={`./images/air/${airState}_air.png`} 
              alt="공기 상태" 
              key="airImage"
            />
            <img
              src={`./images/air/${airState}_face.png`} 
              alt="마스크 착용 유무" 
              key="faceImage"
            />
            { airState === "bad" && <span>마스크<br/><span className="bad">권고</span></span> }
            { airState === "mask" && <span>마스크<br/><span className="mask">필수!</span></span> }
            <AirComponents>
            {airData?.components && Object.entries(airData.components).map(([key, value]) => (
              <AirComponent key={key}>
                <p>{key}</p>
                <p>{value}</p>
              </AirComponent>
            ))}
            </AirComponents>
          </>
          )
      )}
    </FineAirWrapper>
  );
};

export default FineAir;
