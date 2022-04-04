import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from "react-router-dom";
import {getActive} from "../index";
import {isValidRole} from "../../../../../utils/jwt";
import {NavItemRoot, NavItemSub} from "./NavItem";
import {PaperStyle} from "./style";

export const NavListRoot = ({user, list}) => {
  const menuRef = useRef(null);

  const { pathname } = useLocation();

  const active = getActive(list.link(), pathname);

  const [toggle, setToggle] = useState(false);

  const hasChildren = list.children?.some(child => child.menu && isValidRole(user, child.roles));

  const handleOpen = () => {
    setToggle(true)
  }

  const handleClose = () => {
    setToggle(false)
  }

  useEffect(() => {
    if(toggle) {
      handleClose();
    }
  }, [pathname])

  if(hasChildren) {
    const children = list.children
      .filter((child => child.menu))
      .filter(child => isValidRole(user, child.roles));

    return (
      <>
        <NavItemRoot
          user={user}
          item={list}
          active={active}
          toggle={toggle}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          ref={menuRef}
        />

        <PaperStyle
          open={toggle}
          anchorEl={menuRef.current}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          {children.map((item, index) => (
              <NavListSub key={`${index}${item.title}`} user={user} list={item}/>
          ))}
        </PaperStyle>
      </>
    )
  }

  return <NavItemRoot user={user} item={list} active={active}/>

}

export const NavListSub = ({user, list}) => {
  const menuRef = useRef(null);

  const { pathname } = useLocation();

  const active = getActive(list.link(), pathname);

  const [toggle, setToggle] = useState(false);

  const hasChildren = list.children?.some(child => child.menu && isValidRole(user, child.roles));

  const handleOpen = () => {
    setToggle(true)
  }

  const handleClose = () => {
    setToggle(false)
  }

  if(hasChildren) {
    const children = list.children
      .filter((child => child.menu))
      .filter(child => isValidRole(user, child.roles));

    return (
      <>
        <NavItemSub
          user={user}
          item={list}
          active={active}
          toggle={toggle}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          ref={menuRef}
        />

        <PaperStyle
          open={toggle}
          anchorEl={menuRef.current}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          {children.map((item, index) => (
            <NavListSub key={`${index}${item.title}`} user={user} list={item}/>
          ))}
        </PaperStyle>
      </>
    )
  }

  return <NavItemSub user={user} item={list} active={active}/>
}