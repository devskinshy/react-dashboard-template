import React from 'react';
import {styled} from "@mui/material/styles";
import {Box, Link, Typography} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import {INDEX, ROLES} from "../../../configs";
import {MyAvatar} from "../../../helpers/MUI";
import {getKeyByValue} from "../../../utils/common";

const RootStyle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isCollapse'
})(({ isCollapse, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  ...(isCollapse && {
    backgroundColor: 'transparent',
  }),
}));

const ContentStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isCollapse'
})(({isCollapse, theme}) => ({
  marginLeft: theme.spacing(2),
  transition: theme.transitions.create('width', {
    duration: theme.transitions.duration.shorter,
  }),
  ...(isCollapse && {
    marginLeft: 0,
    width: 0,
  }),
}))

const NavBarAccount = ({ user, isCollapse }) => {
  return (
    <Link underline="none" color="inherit" component={RouterLink} to={INDEX}>
      <RootStyle isCollapse={isCollapse}>
        <MyAvatar user={user}/>

        <ContentStyle isCollapse={isCollapse}>
          <Typography variant="subtitle2" noWrap>
            {user?.id}
          </Typography>
          <Typography variant="body2" color={'text.secondary'} noWrap>
            {getKeyByValue(ROLES, user?.groups[0])}
          </Typography>
        </ContentStyle>
      </RootStyle>
    </Link>
  );
};

export default NavBarAccount;