import React from 'react';
import {useDispatch} from "react-redux";
import {closeSetting, resetAll} from "../../redux/modules/setting";
import SettingHeader from "../../components/setting/SettingHeader";

const SettingHeaderContainer = (props) => {
  const dispatch = useDispatch();

  const onCloseSetting = () => {
    dispatch(closeSetting());
  }

  const onResetSetting = () => {
    dispatch(resetAll());
  }

  return <SettingHeader
    onCloseSetting={onCloseSetting}
    onResetSetting={onResetSetting}
    {...props}
  />;
};

export default SettingHeaderContainer;