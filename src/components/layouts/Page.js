import React, {forwardRef} from 'react';
import {Helmet} from "react-helmet-async";
import {Container} from "@mui/material";
import {TITLE} from "../../configs";

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | ${TITLE}`}</title>
      {meta}
    </Helmet>

    <Container ref={ref} {...other}>
      {children}
    </Container>
  </>
));

export default Page;