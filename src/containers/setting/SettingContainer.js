import React from 'react';
import { useTheme } from '@mui/material/styles';
import {useDispatch} from "react-redux";
import {closeSetting, openSetting, resetAll} from "../../redux/modules/setting";
import SettingTemplate from "../../components/setting/SettingTemplate";
import useSetting from "../../hooks/useSetting";
import {varFade} from "../../helpers/animate";

const SettingContainer = (props) => {
  const theme = useTheme()
  const dispatch = useDispatch();
  const setting = useSetting();

  const varSidebar = varFade({
    distance: theme.dashboard.NAVBAR.BASE_WIDTH,
    durationIn: 0.32,
    durationOut: 0.32,
  }).inRight;

  const onOpenSetting = () => {
    dispatch(openSetting());
  };

  const onCloseSetting = () => {
    dispatch(closeSetting());
  };

  const onResetSetting = () => {
    dispatch(resetAll());
  }

  return (
    <SettingTemplate
      varSidebar={varSidebar}
      setting={setting}
      onOpenSetting={onOpenSetting}
      onCloseSetting={onCloseSetting}
      onResetSetting={onResetSetting}
      {...props}
    />
  );
};

export default SettingContainer;