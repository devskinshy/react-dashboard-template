import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {Box, Link, ListItemText} from "@mui/material";
import {Iconify} from "../../../../../helpers/iconify";
import {isExternalLink} from "../index";
import {ListItemIconStyle, ListItemStyle, ListItemTextStyle} from "./style";
import {isValidRole} from "../../../../../utils/jwt";

export const DotIcon = ({ active }) => {
  return (
    <ListItemIconStyle>
      <Box
        component="span"
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'text.disabled',
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(active && {
            transform: 'scale(2)',
            bgcolor: 'primary.main',
          }),
        }}
      />
    </ListItemIconStyle>
  );
}

export const ArrowIcon = ({ open }) => {
  return (
    <Iconify
      icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
      sx={{ width: 16, height: 16, ml: 1 }}
    />
  );
}

export const NavItemRoot = ({user, item, isCollapse, toggle = false, active, onToggle }) => {
  const { title, link, icon, info, children } = item;
  const path = link();

  const hasChildren = children?.some(child => child.menu && isValidRole(user, child.roles));

  const renderContent = (
    <>
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
      <ListItemTextStyle disableTypography primary={title} isCollapse={isCollapse} />
      {!isCollapse && (
        <>
          {info && info}
          {hasChildren && <ArrowIcon open={toggle} />}
        </>
      )}
    </>
  );

  if (hasChildren) {
    return (
      <ListItemStyle onClick={onToggle} activeRoot={active}>
        {renderContent}
      </ListItemStyle>
    );
  }

  return isExternalLink(path) ? (
    <ListItemStyle component={Link} href={path} target="_blank" rel="noopener">
      {renderContent}
    </ListItemStyle>
  ) : (
    <ListItemStyle component={RouterLink} to={path} activeRoot={active}>
      {renderContent}
    </ListItemStyle>
  );
};

export const NavItemSub = ({user, item, toggle = false, active = false, onToggle }) => {
  const { title, link, info, children } = item;
  const path = link();

  const hasChildren = children?.some(child => child.menu && isValidRole(user, child.roles));

  const renderContent = (
    <>
      <DotIcon active={active} />
      <ListItemText disableTypography primary={title} />
      {info && info}
      {hasChildren && <ArrowIcon open={toggle} />}
    </>
  );

  if (hasChildren) {
    return (
      <ListItemStyle onClick={onToggle} activeSub={active} subItem>
        {renderContent}
      </ListItemStyle>
    );
  }

  return isExternalLink(path) ? (
    <ListItemStyle component={Link} href={path} target="_blank" rel="noopener" subItem>
      {renderContent}
    </ListItemStyle>
  ) : (
    <ListItemStyle component={RouterLink} to={path} activeSub={active} subItem>
      {renderContent}
    </ListItemStyle>
  );
}