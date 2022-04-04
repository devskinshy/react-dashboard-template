import React from 'react';
import SettingContainer from "../containers/setting/SettingContainer";
import SettingModeContainer from "../containers/setting/items/SettingModeContainer";
import SettingLayoutContainer from "../containers/setting/items/SettingLayoutContainer";
import SettingColorPresetsContainer from "../containers/setting/items/SettingColorPresetsContainer";
import SettingStretchContainer from "../containers/setting/items/SettingStretchContainer";
import SettingFullscreen from "../components/setting/items/SettingFullscreen";
import SettingHeaderContainer from "../containers/setting/SettingHeaderContainer";
import DashedDivider from "../components/common/DashedDivider";
import SettingContent from "../components/setting/SettingContent";

const Setting = () => {
  return (
    <SettingContainer>
      <SettingHeaderContainer/>
      <DashedDivider />
      <SettingContent>
        <SettingModeContainer/>
        <SettingLayoutContainer/>
        <SettingColorPresetsContainer/>
        <SettingStretchContainer/>
        <SettingFullscreen/>
      </SettingContent>
    </SettingContainer>
  );
};

export default Setting;