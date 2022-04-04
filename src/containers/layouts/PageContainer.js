import React from 'react';
import Page from "../../components/layouts/Page";
import useSetting from "../../hooks/useSetting";

const PageContainer = ({breakPoint = 'lg', ...props}) => {
  const {themeStretch} = useSetting();

  return <Page maxWidth={themeStretch ? false : breakPoint} {...props}/>;
};

export default PageContainer;