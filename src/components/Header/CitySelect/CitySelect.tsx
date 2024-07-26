import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OpenWeatherDesc, SelectWrapper } from "../styles";

import CreatableSelect from "react-select/creatable";
import { CityOption, cityOptions } from "../data";
import { ActionMeta, OnChangeValue } from "react-select";

const CitySelect: React.FC = () => {
  const navigate = useNavigate();
  const [showDesc, setShowDesc] = useState("");

  const handleChange = (
    newValue: OnChangeValue<CityOption, false>,
    actionMeta: ActionMeta<CityOption>
  ) => {
    navigate(`/${newValue?.value}`);
  };

  return (
    <SelectWrapper>
      <OpenWeatherDesc className={showDesc}>
        Open Weather 제공 도시만 가능합니다.
      </OpenWeatherDesc>
      <CreatableSelect
        onFocus={() => setShowDesc("show")}
        onBlur={() => setShowDesc("")}
        onChange={handleChange}
        options={cityOptions}
        defaultValue={null}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectWrapper>
  );
};

export default CitySelect;
