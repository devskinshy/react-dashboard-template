import React, {useState} from 'react';
import {Button} from "@mui/material";
import {Iconify} from "../../../helpers/iconify";
import {alpha, styled} from "@mui/material/styles";

const ItemStyle = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'fullscreen'
})(({fullscreen, theme}) => ({
  fontSize: 14,
  ...(fullscreen && {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }),
}))

const SettingFullscreen = () => {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <ItemStyle
      fullWidth
      size="large"
      variant="outlined"
      color={fullscreen ? 'primary' : 'inherit'}
      startIcon={<Iconify icon={fullscreen ? 'ic:round-fullscreen-exit' : 'ic:round-fullscreen'} />}
      onClick={toggleFullScreen}
      fullscreen={fullscreen}
    >
      {fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
    </ItemStyle>
  );
};

export default SettingFullscreen;