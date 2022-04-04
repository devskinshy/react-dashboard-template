import React, {useState} from 'react';
import {alpha, styled} from "@mui/material/styles";
import {IconButtonAnimate} from "../../../helpers/animate";
import {MyAvatar} from "../../../helpers/MUI";
import MenuPopover from "./MenuPopover";
import {Box, MenuItem, Stack, Typography} from "@mui/material";
import {HEADER_OPTIONS} from "../../../configs";
import { Link as RouterLink } from 'react-router-dom';
import DashedDivider from "../../common/DashedDivider";

const IconButtonStyle = styled(IconButtonAnimate, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({open, theme}) => ({
  padding: 0,
  ...(open && {
    '&:before': {
      zIndex: 1,
      content: "''",
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      position: 'absolute',
      backgroundColor: alpha(theme.palette.grey[900], 0.8),
    },
  }),
}))

const MenuPopoverStyle = styled(MenuPopover)(({theme}) => ({
  padding: theme.spacing(0),
  marginTop: theme.spacing(1.5),
  marginLeft: theme.spacing(0.75),
  '& .MuiMenuItem-root': {
    typography: theme.typography.body2,
    borderRadius: Number(theme.shape.borderRadius) * 0.75,
  },
}))

const HeaderStyle = styled(Box)(({theme}) => ({
  paddingRight: theme.spacing(2.5),
  paddingLeft: theme.spacing(2.5),
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5)
}))

const ContentStyle = styled(Stack)(({theme}) => ({
  padding: theme.spacing(1)
}))

const LogoutStyle = styled(MenuItem)(({theme}) => ({
  margin: theme.spacing(1)
}))

const AccountPopover = ({user, handleLogout}) => {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButtonStyle onClick={handleOpen}>
        <MyAvatar user={user}/>
      </IconButtonStyle>

      <MenuPopoverStyle
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
      >
        <HeaderStyle>
          <Typography variant="subtitle2" noWrap>
            {user?.id}
          </Typography>
          <Typography variant="body2" color={'text.secondary'}  noWrap>
            {user?.cn}
          </Typography>
        </HeaderStyle>

        <DashedDivider />

        <ContentStyle>
          {HEADER_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </ContentStyle>

        <DashedDivider />

        <LogoutStyle onClick={handleLogout}>
          Logout
        </LogoutStyle>
      </MenuPopoverStyle>
    </>
  );
};

export default AccountPopover;