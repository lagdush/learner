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

type InputProps ={
label: string
onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input: React.FC<InputProps> = ({label, onChange}) => {
   const classes = useStyles();
   return (
      <TextField className={classes.root} id="standard-basic" label={label} onChange={onChange} />
   )
   }


   export default Input