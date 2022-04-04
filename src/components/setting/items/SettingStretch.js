import React from 'react';
import {styled} from "@mui/material/styles";
import {CardActionArea, Stack, Typography} from "@mui/material";
import { Iconify } from "../../../helpers/iconify";

const BoxStyle = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== 'themeStretch'
})(({ themeStretch, theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.disabled,
  border: `solid 1px ${theme.palette.grey[500_12]}`,
  backgroundColor: theme.palette.background.neutral,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
  ...(themeStretch && {
    color: theme.palette.primary.main,
  }),
}))

const ItemStyle = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'themeStretch'
})(({themeStretch, theme}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '50%',
  height: 40,
  borderRadius: theme.shape.borderRadius,
  color: 'action.active',
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.customShadows.z12,
  transition: theme.transitions.create('width'),
  ...(themeStretch && {
    width: '100%',
    color: theme.palette.primary.main,
  }),
}))

const SettingStretch = ({themeStretch, onToggleStretch}) => {
  const ICON_SIZE = {
    width: themeStretch ? 24 : 18,
    height: themeStretch ? 24 : 18,
  };

  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle2">Stretch</Typography>
      <BoxStyle themeStretch={themeStretch} onClick={onToggleStretch} >
        <ItemStyle themeStretch={themeStretch}>
          <Iconify
            icon={themeStretch ? 'eva:arrow-ios-back-fill' : 'eva:arrow-ios-forward-fill'}
            {...ICON_SIZE}
          />
          <Iconify
            icon={themeStretch ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-back-fill'}
            {...ICON_SIZE}
          />
        </ItemStyle>
      </BoxStyle>
    </Stack>
  );
};

export default SettingStretch;