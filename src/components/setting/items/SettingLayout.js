import React from 'react';
import {alpha, styled} from "@mui/material/styles";
import {Box, CardActionArea, Grid, RadioGroup, Stack, Typography} from "@mui/material";
import BoxMask from "../BoxMask";

const optionsList = ['horizontal', 'vertical'];

const BoxStyle = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== 'isSelected'
})(({ isSelected, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(1.5),
  color: theme.palette.text.disabled,
  border: `solid 1px ${theme.palette.grey[500_12]}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
  ...(isSelected && {
    color: theme.palette.primary.main,
    boxShadow: theme.customShadows.z20,
  }),
}));

const style = {
  width: 1,
  height: 32,
  borderRadius: 0.5,
};

const VerticalBox = ({ isSelected }) => {
  return (
    <>
      <Box
        sx={{
          ...style,
          mb: 0.75,
          height: 12,
          bgcolor: (theme) => alpha(theme.palette.text.disabled, 0.72),
          ...(isSelected && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.72),
          }),
        }}
      />
      <Box
        sx={{
          ...style,
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
          bgcolor: (theme) => alpha(theme.palette.text.disabled, 0.08),
          ...(isSelected && {
            border: (theme) => `dashed 1px ${theme.palette.primary.main}`,
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          }),
        }}
      />
    </>
  );
}

const HorizontalBox = ({ isSelected }) => {
  return (
    <>
      <Box
        sx={{
          ...style,
          mb: 0.75,
          height: 12,
          bgcolor: (theme) => alpha(theme.palette.text.disabled, 0.72),
          ...(isSelected && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.72),
          }),
        }}
      />
      <Stack width={1} direction="row" justifyContent="space-between">
        <Box
          sx={{
            ...style,
            width: 20,
            bgcolor: (theme) => alpha(theme.palette.text.disabled, 0.32),
            ...(isSelected && {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.32),
            }),
          }}
        />
        <Box
          sx={{
            ...style,
            width: `calc(100% - 26px)`,
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
            bgcolor: (theme) => alpha(theme.palette.text.disabled, 0.08),
            ...(isSelected && {
              border: (theme) => `dashed 1px ${theme.palette.primary.main}`,
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
            }),
          }}
        />
      </Stack>
    </>
  );
}

const SettingLayout = ({themeLayout, onChangeLayout}) => {
  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle2">Layout</Typography>
      <RadioGroup name="themeLayout" value={themeLayout} onChange={onChangeLayout}>
        <Grid container spacing={2.5}>
          {optionsList.map((layout) => {
            const isSelected = themeLayout === layout;
            const isVertical = layout === 'vertical';

            return (
              <Grid key={layout} item xs={6}>
                <BoxStyle isSelected={isSelected}>
                  {isVertical ? <VerticalBox isSelected={isSelected} /> : <HorizontalBox isSelected={isSelected} />}
                  <BoxMask value={layout} />
                </BoxStyle>
              </Grid>
            );
          })}
        </Grid>
      </RadioGroup>
    </Stack>
  );
};

export default SettingLayout;