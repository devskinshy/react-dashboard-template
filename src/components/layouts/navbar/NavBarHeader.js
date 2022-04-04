import React from 'react';
import {Stack} from "@mui/material";
import Logo from "../Logo";
import CollapseButton from "./CollapseButton";
import {styled} from "@mui/material/styles";

const RootStyle = styled(Stack, {
  shouldForwardProp: (prop) => prop !== 'isCollapse'
})(({isCollapse, theme}) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(2.5),
  paddingLeft: theme.spacing(2.5),
  flexShrink: 0,
  ...(isCollapse && { alignItems: 'center' }),
}));

const NavBarHeader = ({isDesktop, isCollapse, isOpenDesktop, onToggleDesktop, children}) => {
  return (
    <RootStyle isCollapse={isCollapse} spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Logo/>
        {isDesktop && !isCollapse && (
          <CollapseButton onToggle={onToggleDesktop} toggle={isOpenDesktop} />
        )}
      </Stack>
      {children}
    </RootStyle>
  );
};

export default NavBarHeader;