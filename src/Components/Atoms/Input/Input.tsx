import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '25vw',
      textAlign: 'center',
    },
  },
}));

interface InputProps {
label: string
}

const Input: React.FC<InputProps> = ({label}) => {
   const classes = useStyles();
   return (
      <TextField className={classes.root} id="standard-basic" label={label} />
   )
   }


   export default Input