import React, {useMemo} from 'react';
import {alpha, createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import useSetting from "../hooks/useSetting";
import {palette, typography, breakpoints, shape, shadows, customShadows, zIndex} from "../theme";
import {getColorPresets} from "../theme/options/palette";
import componentsOverride from '../theme/overrides';
import {HEADER, ICON, NAVBAR} from "../configs";

const ThemePreset = ({children}) => {
  const {themeMode, themeColorPresets} = useSetting();

  const themeOptions = useMemo(() => {
    const preset = getColorPresets(themeColorPresets);

    return {
      palette: {
        ...palette[themeMode],
        primary: preset
      },
      typography,
      breakpoints,
      shape,
      shadows: shadows[themeMode],
      customShadows: {
        ...customShadows[themeMode],
        primary: `0 8px 16px 0 ${alpha(preset.main, 0.24)}`,
      },
      zIndex,
      dashboard: {
        ICON,
        HEADER,
        NAVBAR,
      }
    }
  }, [themeMode, themeColorPresets]);

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  console.log(theme)

  return (
    <StyledEngineProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemePreset;