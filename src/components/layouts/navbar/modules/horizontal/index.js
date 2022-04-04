import React from 'react';
import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";
import {DASHBOARD_OPTIONS} from "../../../../../configs";
import {isValidRole} from "../../../../../utils/jwt";
import {NavListRoot} from "./NavList";

const RootStyle = styled(Stack)(({theme}) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.neutral,
  borderRadius: theme.shape.borderRadius,
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
}))

const WrapperStyle = styled(Stack)(({theme}) => ({
  flexDirection: 'row',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}))

const NavSectionHorizontal = ({user}) => {
  const groups = DASHBOARD_OPTIONS
    .filter((group) => (group.menu))
    .filter((group) => (isValidRole(user, group.roles)))
    .filter((group) => (group.children?.some(item => item.menu && isValidRole(user, item.roles))));

  return (
    <RootStyle>
      <WrapperStyle>
        {groups.map((group, index) => {

          const children = group.children
            .filter((child => child.menu))
            .filter(child => isValidRole(user, child.roles));

          return (
            <Stack key={`${index}${group.title}`} direction="row" flexShrink={0}>
              {children.map((child, index) => (
                <NavListRoot key={`${index}${child.title}`} user={user} list={child} />
              ))}
            </Stack>
          )
        })}
      </WrapperStyle>
    </RootStyle>
  );
};

export default NavSectionHorizontal;