import React from 'react';
import {alpha, styled} from "@mui/material/styles";
import {Box, CardActionArea, Grid, RadioGroup, Stack, Typography} from "@mui/material";
import {colorPresets} from "../../../theme/options/palette";
import BoxMask from "../BoxMask";

const optionsList = colorPresets.map((color) => ({
  name: color.name,
  value: color.main,
}));

const BoxStyle = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== 'colorValue' && prop !== 'isSelected'
})(({ colorValue, isSelected, theme }) => ({
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  border: `solid 1px ${theme.palette.grey[500_12]}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
  ...(isSelected && {
    backgroundColor: alpha(colorValue, 0.08),
    border: `solid 2px ${colorValue}`,
    boxShadow: `inset 0 4px 8px 0 ${alpha(colorValue, 0.24)}`,
  }),
}));

const ItemStyle =styled(Box, {
  shouldForwardProp: (prop) => prop !== 'colorValue' && prop !== 'isSelected'
})(({ colorValue, isSelected, theme }) => ({
  width: 24,
  height: 14,
  borderRadius: '50%',
  backgroundColor: colorValue,
  transform: 'rotate(-45deg)',
  transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
  ...(isSelected && { transform: 'none' }),
}));

const SettingColorPresets = ({themeColorPresets, onChangeColor}) => {
  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle2">Presets</Typography>
      <RadioGroup name="themeColorPresets" value={themeColorPresets} onChange={onChangeColor}>
        <Grid container spacing={1.5}>
          {optionsList.map((color) => {
            const colorName = color.name;
            const colorValue = color.value;
            const isSelected = themeColorPresets === colorName;

            return (
              <Grid key={colorName} item xs={4}>
                <BoxStyle colorValue={colorValue} isSelected={isSelected}>
                  <ItemStyle colorValue={colorValue} isSelected={isSelected}/>
                  <BoxMask value={colorName} />
                </BoxStyle>
              </Grid>
            );
          })}
        </Grid>
      </RadioGroup>
    </Stack>
  );
};

export default SettingColorPresets;