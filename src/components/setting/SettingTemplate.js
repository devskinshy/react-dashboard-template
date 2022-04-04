import React, {useEffect} from 'react';

import {alpha, styled} from "@mui/material/styles";
import {Backdrop} from "@mui/material";
import {AnimatePresence, m} from "framer-motion";

import {cssStyles} from "../../helpers/MUI";
import {DEFAULT_SETTING_OPTIONS} from "../../configs";

import ToggleButton from "./items/ToggleButton";

// ---------------------------------------------------------------------------------------------------------------------

const RootStyle = styled(m.div)(({theme}) => ({
  ...cssStyles(theme).bgBlur({color: theme.palette.background.paper, opacity: 0.92}),
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  position: 'fixed',
  overflow: 'hidden',
  width: theme.dashboard.NAVBAR.BASE_WIDTH,
  flexDirection: 'column',
  margin: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  zIndex: theme.zIndex.drawer + 3,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: `-24px 12px 32px -4px ${alpha(
    theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
    0.16
  )}`,
}));

const BackdropStyle = styled(Backdrop)(({theme}) => ({
  background: 'transparent',
  zIndex: theme.zIndex.drawer + 1
}));

// ---------------------------------------------------------------------------------------------------------------------

const SettingTemplate = ({varSidebar, setting, onOpenSetting, onCloseSetting, children}) => {
  const {
    toggle,
    themeMode,
    themeColorPresets,
    themeLayout,
    themeStretch
  } = setting;

  const {
    themeMode : defaultThemeMode,
    themeLayout: defaultThemeLayout,
    themeColorPresets: defaultThemeColorPresets,
    themeStretch: defaultThemeStretch
  } = DEFAULT_SETTING_OPTIONS;

  const marking =
    themeMode !== defaultThemeMode ||
    themeLayout !== defaultThemeLayout ||
    themeColorPresets !== defaultThemeColorPresets ||
    themeStretch !== defaultThemeStretch;

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [toggle]);

  return (
    <>
      <BackdropStyle open={toggle} onClick={onCloseSetting}/>

      {!toggle && <ToggleButton marking={marking} toggle={toggle} onToggle={onOpenSetting}/>}

      <AnimatePresence>
        {
          toggle && (
            <RootStyle {...varSidebar}>
              {children}
            </RootStyle>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default SettingTemplate;