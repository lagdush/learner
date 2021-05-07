import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { LoaderBox } from './LoginBox-style';

const Loader = () => {
  return (
    <LoaderBox>
      <CircularProgress size={90} style={{ color: 'white' }} />
    </LoaderBox>
  );
};

export default Loader;
