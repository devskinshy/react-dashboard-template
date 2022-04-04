// utils
import {createAvatar} from "../utils";
//
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function MyAvatar({ user, ...other }) {
  return (
    <Avatar
      src={user?.photoURL}
      alt={user?.id}
      color={user?.photoURL ? 'default' : createAvatar(user?.id).color}
      {...other}
    >
      {createAvatar(user?.id).name}
    </Avatar>
  );
}
