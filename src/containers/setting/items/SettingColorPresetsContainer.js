import React from 'react';
import {useDispatch} from "react-redux";
import useSetting from "../../../hooks/useSetting";
import {changeColor} from "../../../redux/modules/setting";
import SettingColorPresets from "../../../components/setting/items/SettingColorPresets";

const SettingColorPresetsContainer = () => {
  const dispatch = useDispatch();
  const {themeColorPresets} = useSetting();

  const onChangeColor = (event) => {
    const color = event.target.value;

    if(color === themeColorPresets) {return;}

    dispatch(changeColor(color));
  }

  return (
    <SettingColorPresets themeColorPresets={themeColorPresets} onChangeColor={onChangeColor}/>
  );
};

export default SettingColorPresetsContainer;