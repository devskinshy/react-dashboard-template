import React from 'react';
import {useDispatch} from "react-redux";
import useSetting from "../../../hooks/useSetting";
import {toggleStretch} from "../../../redux/modules/setting";
import SettingStretch from "../../../components/setting/items/SettingStretch";

const SettingStretchContainer = () => {
  const dispatch = useDispatch();
  const {themeStretch} = useSetting();
  
  const onToggleStretch = () => {
    dispatch(toggleStretch());
  }

  return (
    <SettingStretch themeStretch={themeStretch} onToggleStretch={onToggleStretch}/>
  );
};

export default SettingStretchContainer;