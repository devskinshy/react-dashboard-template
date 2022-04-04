import {useSelector} from "react-redux";

const useSetting = () => {
  const {
    toggle,
    themeMode,
    themeColorPresets,
    themeLayout,
    themeStretch
  } = useSelector(({setting}) => ({
    toggle: setting.toggle,
    themeMode : setting.themeMode,
    themeColorPresets : setting.themeColorPresets,
    themeLayout: setting.themeLayout,
    themeStretch: setting.themeStretch
  }));

  return { isVertical: themeLayout === 'vertical', toggle, themeMode, themeColorPresets, themeLayout, themeStretch };
};

export default useSetting;