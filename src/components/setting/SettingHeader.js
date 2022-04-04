import React from 'react';
import {Stack, Typography} from "@mui/material";
import {IconButtonAnimate} from "../../helpers/animate";
import {Iconify} from "../../helpers/iconify";
import {styled} from "@mui/material/styles";

const RootStyle = styled(Stack)(({theme}) => ({
  flexDirection: 'row',
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(2.5)
}));

const SettingHeader = ({onCloseSetting, onResetSetting}) => {
  return (
    <RootStyle>
      <Typography variant="subtitle1">Settings</Typography>
      <div>
        <IconButtonAnimate onClick={onResetSetting}>
          <Iconify icon={'ic:round-refresh'} width={20} height={20} />
        </IconButtonAnimate>
        <IconButtonAnimate onClick={onCloseSetting}>
          <Iconify icon={'eva:close-fill'} width={20} height={20} />
        </IconButtonAnimate>
      </div>
    </RootStyle>
  );
};

export default SettingHeader;