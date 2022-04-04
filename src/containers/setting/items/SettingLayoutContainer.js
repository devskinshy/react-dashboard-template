import React from 'react';
import {useDispatch} from "react-redux";
import useSetting from "../../../hooks/useSetting";
import {changeLayout} from "../../../redux/modules/setting";
import SettingLayout from "../../../components/setting/items/SettingLayout";

const SettingLayoutContainer = () => {
  const dispatch = useDispatch();
  const {themeLayout} = useSetting();

  const onChangeLayout = (event) => {
    const layout = event.target.value;

    if(layout === themeLayout) {return;}

    dispatch(changeLayout(layout));
  }

  return (
    <SettingLayout themeLayout={themeLayout} onChangeLayout={onChangeLayout}/>
  );
};

export default SettingLayoutContainer;