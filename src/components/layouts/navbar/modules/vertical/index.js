import React from 'react';
import {DASHBOARD_OPTIONS} from "../../../../../configs";
import {Box, List, ListSubheader} from "@mui/material";
import {styled} from "@mui/material/styles";
import {isValidRole} from "../../../../../utils/jwt";
import {NavListRoot} from "./NavList";

const ListStyle = styled(List)(({theme}) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}))

const ListSubheaderStyle = styled(ListSubheader, {
  shouldForwardProp: (prop) => prop !== 'isCollapse'
})(({isCollapse, theme}) => ({
  ...theme.typography.overline,
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  ...(isCollapse && {
    opacity: 0,
  }),
}))

const NavSectionVertical = ({ user, isCollapse = false, ...props }) => {
  const groups = DASHBOARD_OPTIONS
    .filter((group) => (group.menu))
    .filter((group) => (isValidRole(user, group.roles)))
    .filter((group) => (group.children?.some(child => child.menu && isValidRole(user, child.roles))));

  return (
    <Box {...props}>
      {
        groups.map((group, index) => {

          const children = group.children
            .filter((child => child.menu))
            .filter(child => isValidRole(user, child.roles));

          return (
            <ListStyle key={`${index}${group.title}`} disablePadding>
              {
                group.title && (
                  <ListSubheaderStyle isCollapse={isCollapse} disableSticky disableGutters>
                    {group.title}
                  </ListSubheaderStyle>
                )
              }
              {
                children.map((child, index) => (
                  <NavListRoot key={`${index}${child.title}`} user={user} list={child} isCollapse={isCollapse}/>
                ))
              }
            </ListStyle>
          )
      })}
    </Box>
  );
};

export default NavSectionVertical;