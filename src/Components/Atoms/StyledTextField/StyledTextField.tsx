import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
  input: {
    fontWeight: 500,
    border: 'none',
    textAlign: 'center',
    marginBottom: '1rem'
  },
  root: {
    '& > *': {
      textAlign: 'center',
      fontSize: '.7rem',
      alignSelf: 'center'
    }
  }
}));
type Customization = {
  value: string;
  name: string;
  placeholder: string;
  label: string;
};

type TextFieldProps = {
  customization: Customization;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const StyledTextField: React.FC<TextFieldProps> = ({
  customization,
  inputHandler,
  disabled = false
}) => {
  const classes = useStyles();
  return disabled ? (
    <TextField
      className={classes.root}
      InputProps={{ className: classes.input }}
      required
      fullWidth
      value={customization.value}
      onChange={inputHandler}
      name={customization.name}
      placeholder={customization.placeholder}
      label={customization.label}
      disabled
    />
  ) : (
    <TextField
      className={classes.root}
      InputProps={{ className: classes.input }}
      required
      fullWidth
      value={customization.value}
      onChange={inputHandler}
      name={customization.name}
      placeholder={customization.placeholder}
      label={customization.label}
    />
  );
};

export default StyledTextField;
