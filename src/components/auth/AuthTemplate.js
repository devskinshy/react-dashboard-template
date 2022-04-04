import React from 'react';
import Page from "../layouts/Page";
import {Box, Container, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {TITLE} from "../../configs";

const ContentStyle = styled('div')(({theme}) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

const TitleWrapperStyle = styled(Stack)(({theme}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: theme.spacing(5)
}));

const TitleStyle = styled(Box)({
  flexGrow: 1
});

const AuthTemplate = ({children}) => {
  return (
    <Page title="Login">
      <Container maxWidth='sm'>
        <ContentStyle>
          <TitleWrapperStyle>
            <TitleStyle>
              <Typography variant="h4" gutterBottom>
                Sign in to {TITLE}
              </Typography>
              <Typography color={'text.secondary'}>Enter your details below.</Typography>
            </TitleStyle>
          </TitleWrapperStyle>

          {children}

        </ContentStyle>
      </Container>
    </Page>
  );
};

export default AuthTemplate;