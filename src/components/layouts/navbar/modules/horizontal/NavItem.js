import {forwardRef} from "react";
import {isValidRole} from "../../../../../utils/jwt";
import {ListItemStyle, TitleStyle} from "./style";
import {isExternalLink} from "../index";
import {Iconify} from "../../../../../helpers/iconify";
import {Box, Link} from "@mui/material";
import { NavLink as RouterLink } from 'react-router-dom';

const NavItemContent = ({ icon, title, children, subItem }) => {
  return (
    <>
      {icon && (
        <Box
          component="span"
          sx={(theme) => ({
            mr: 1,
            width: theme.dashboard.ICON.NAVBAR_ITEM_HORIZONTAL,
            height: theme.dashboard.ICON.NAVBAR_ITEM_HORIZONTAL,
            '& svg': { width: '100%', height: '100%' },
          })}
        >
          {icon}
        </Box>
      )}
      <TitleStyle>{title}</TitleStyle>
      {children && (
        <Iconify
          icon={subItem ? 'eva:chevron-right-fill' : 'eva:chevron-down-fill'}
          sx={(theme) =>({
            ml: 0.5,
            width: theme.dashboard.ICON.NAVBAR_ITEM_HORIZONTAL,
            height: theme.dashboard.ICON.NAVBAR_ITEM_HORIZONTAL,
          })}
        />
      )}
    </>
  )
}

export const NavItemRoot = forwardRef(({ user, item, active, toggle, onMouseEnter, onMouseLeave }, ref) => {
  const { title, link, icon, children } = item;
  const path = link();

  const hasChildren = children?.some(child => child.menu && isValidRole(user, child.roles));

  if(hasChildren) {
    return (
      <ListItemStyle
        ref={ref}
        toggle={toggle}
        activeRoot={active}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <NavItemContent icon={icon} title={title} children={hasChildren}/>
      </ListItemStyle>
    )
  }

  return isExternalLink(path)
    ? (
      <ListItemStyle component={Link} href={path} target="_blank" rel="noopener">
        <NavItemContent icon={icon} title={title} children={hasChildren} />
      </ListItemStyle>
    )
    : (
      <ListItemStyle component={RouterLink} to={path} activeRoot={active}>
        <NavItemContent icon={icon} title={title} children={hasChildren} />
      </ListItemStyle>
    )
})

export const NavItemSub = forwardRef(({ user, item, active, toggle, onMouseEnter, onMouseLeave }, ref) => {
  const { title, link, icon, children } = item;
  const path = link();

  const hasChildren = children?.some(child => child.menu && isValidRole(user, child.roles));

  if(hasChildren) {
    return (
      <ListItemStyle
        subItem
        disableRipple
        ref={ref}
        toggle={toggle}
        activeSub={active}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <NavItemContent subItem icon={icon} title={title} children={hasChildren}/>
      </ListItemStyle>
    )
  }

  return isExternalLink(path)
    ? (
      <ListItemStyle subItem disableRipple component={Link} href={path} target="_blank" rel="noopener">
        <NavItemContent subItem icon={icon} title={title} children={hasChildren} />
      </ListItemStyle>
    )
    : (
      <ListItemStyle subItem disableRipple component={RouterLink} to={path} activeSub={active}>
        <NavItemContent subItem icon={icon} title={title} children={hasChildren} />
      </ListItemStyle>
    )
})