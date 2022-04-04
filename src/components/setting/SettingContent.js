import React from 'react';
import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Scrollbar} from "../../helpers/simplebar";

const RootStyle = styled(Scrollbar)({
  flexGrow: 1
});

const ContentStyle = styled(Stack)(({theme}) => ({
  padding: theme.spacing(3)
}));

const SettingContent = ({children}) => {
  return (
    <RootStyle>
      <ContentStyle>
        <Stack spacing={3}>
          {children}
        </Stack>
      </ContentStyle>
    </RootStyle>
  );
};

export default SettingContent;