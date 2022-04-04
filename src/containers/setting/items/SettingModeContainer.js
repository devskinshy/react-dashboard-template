import React from 'react';
import {useDispatch} from "react-redux";
import useSetting from "../../../hooks/useSetting";
import {changeMode} from "../../../redux/modules/setting";
import SettingMode from "../../../components/setting/items/SettingMode";

const SettingModeContainer = () => {
  const dispatch = useDispatch();
  const {themeMode} = useSetting();

  const onChangeMode = (event) => {
    const mode = event.target.value;

    if(mode === themeMode) {return;}

    dispatch(changeMode(mode));
  }

  return <SettingMode themeMode={themeMode} onChangeMode={onChangeMode}/>;
};

export default SettingModeContainer;