import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  input: {
    fontWeight: 300,
    border: 'none',
    textAlign: 'center'
  },
  root: {
    '& > *': {
      textAlign: 'center',
      fontSize: '.5em',
      backgroundColor: 'white',
      padding: '0 20px',
    }
  }
}));

type InputProps = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, onChange }) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      className={classes.root}
      InputProps={{ className: classes.input }}
      id="standard-basic"
      label={label}
      onChange={onChange}
    />
  );
};

export default Input;
