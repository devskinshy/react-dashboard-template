import React from 'react';
import {styled} from "@mui/material/styles";
import {CardActionArea, Grid, RadioGroup, Stack, Typography} from "@mui/material";
import {Iconify} from "../../../helpers/iconify";
import BoxMask from "../BoxMask";

const optionsList = [
  {mode: 'light', icon: 'ph:sun-duotone'},
  {mode: 'dark', icon: 'ph:moon-duotone'}
];

const BoxStyle = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== 'mode' && prop !== 'isSelected'
})(({ mode, isSelected, theme }) => ({
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  border: `solid 1px ${theme.palette.grey[500_12]}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
  backgroundColor: mode === 'light' ? theme.palette.common.white : theme.palette.grey['800'],
  ...(isSelected && {
    color: theme.palette.primary.main,
    boxShadow: theme.customShadows.z20,
  }),
}));

const SettingMode = ({themeMode, onChangeMode}) => {
  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle2">Mode</Typography>
      <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode}>
        <Grid container spacing={2.5}>
          {optionsList.map(({mode, icon}, index) => {
            const isSelected = themeMode === mode;

            return (
              <Grid key={mode} item xs={6}>
                <BoxStyle mode={mode} isSelected={isSelected}>
                  <Iconify icon={icon} width={28} height={28} />
                  <BoxMask value={mode} />
                </BoxStyle>
              </Grid>
            )
          })}
        </Grid>
      </RadioGroup>
    </Stack>
  );
};

export default SettingMode;