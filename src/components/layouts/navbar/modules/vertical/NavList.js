import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import { List, Collapse } from '@mui/material';
import {NavItemRoot, NavItemSub} from "./NavItem";
import {isValidRole} from "../../../../../utils/jwt";
import {getActive} from "../index";

export const NavListRoot = ({user, list, isCollapse}) => {
  const { pathname } = useLocation();

  const active = getActive(list.link(), pathname);

  const [toggle, setToggle] = useState(active);

  const hasChildren = list.children?.some(child => child.menu && isValidRole(user, child.roles));

  const onToggle = () => {
    setToggle(!toggle)
  }

  if(hasChildren) {
    const children = list.children
      .filter((child => child.menu))
      .filter(child => isValidRole(user, child.roles));

    return (
      <>
        <NavItemRoot
          user={user}
          item={list}
          isCollapse={isCollapse}
          active={active}
          toggle={toggle}
          onToggle={onToggle}
        />

        {!isCollapse && (
          <Collapse in={toggle} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((item, index) => (
                <NavListSub key={`${index}${item.title}`} user={user} pathname={pathname} list={item} />
              ))}
            </List>
          </Collapse>
        )}
      </>
    )
  }

  return <NavItemRoot user={user} item={list} active={active} isCollapse={isCollapse} />;
};

export const NavListSub = ({user, list}) => {
  const { pathname } = useLocation();

  const active = getActive(list.link(), pathname);

  const [toggle, setToggle] = useState(active);

  const hasChildren = list.children?.some(child => child.menu && isValidRole(user, child.roles));

  const onToggle = () => {
    setToggle(!toggle)
  }

  if (hasChildren) {
    const children = list.children
      .filter((child => child.menu))
      .filter(child => isValidRole(user, child.roles));

    return (
      <>
        <NavItemSub user={user} item={list} onToggle={onToggle} toggle={toggle} active={active} />

        <Collapse in={toggle} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 3 }}>
            {children.map((item, index) => (
              <NavItemSub key={`${index}${item.title}`}  user={user} item={item} active={getActive(item.link(), pathname)} />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return <NavItemSub user={user} item={list} active={active} />;
}