import React from 'react';
import DashboardContainer from "../containers/layouts/DashboardContainer";
import DashboardHeaderContainer from "../containers/layouts/header/DashboardHeaderContainer";
import AccountPopoverContainer from "../containers/layouts/header/AccountPopoverContainer";
import DashboardNavBarContainer from "../containers/layouts/navbar/DashboardNavBarContainer";
import NavBarHorizontalContainer from "../containers/layouts/navbar/desktop/NavBarHorizontalContainer";
import NavBarVerticalContainer from "../containers/layouts/navbar/desktop/NavBarVerticalContainer";
import NavBarMobileContainer from "../containers/layouts/navbar/mobile/NavBarMobileContainer";
import NavBarScrollBar from "../components/layouts/navbar/NavBarScrollBar";
import NavBarHeaderContainer from "../containers/layouts/navbar/NavBarHeaderContainer";
import NavBarAccountContainer from "../containers/layouts/navbar/NavBarAccountContainer";
import DashboardMainContainer from "../containers/layouts/main/DashboardMainContainer";
import NavSectionVerticalContainer from "../containers/layouts/navbar/modules/NavSectionVerticalContainer";
import NavSectionHorizontalContainer from "../containers/layouts/navbar/modules/NavSectionHorizontalContainer";
import GrowDivider from "../components/common/GrowDivider";
import HeaderContent from "../components/layouts/header/HeaderContent";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardHeaderContainer>
        <GrowDivider />
        <HeaderContent>
          <AccountPopoverContainer/>
        </HeaderContent>
      </DashboardHeaderContainer>

      <DashboardNavBarContainer>
        <NavBarVerticalContainer>
          <NavSectionHorizontalContainer/>
        </NavBarVerticalContainer>

        <NavBarHorizontalContainer>
          <NavBarScrollBar>
            <NavBarHeaderContainer>
              <NavBarAccountContainer/>
            </NavBarHeaderContainer>
            <NavSectionVerticalContainer/>
          </NavBarScrollBar>
        </NavBarHorizontalContainer>

        <NavBarMobileContainer>
          <NavBarScrollBar>
            <NavBarHeaderContainer>
              <NavBarAccountContainer/>
            </NavBarHeaderContainer>
            <NavSectionVerticalContainer/>
          </NavBarScrollBar>
        </NavBarMobileContainer>
      </DashboardNavBarContainer>

      <DashboardMainContainer/>
    </DashboardContainer>
  );
};

export default Dashboard;