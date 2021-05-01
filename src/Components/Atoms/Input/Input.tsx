import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  input: {
    fontWeight: 300,
  },
  root: {
    '& > *': {
      [theme.breakpoints.up('xs')]: {
        textAlign: 'center',
        width: '100%',
        fontSize: '.7em'
    },
      [theme.breakpoints.up('sm')]: {
        textAlign: 'center',
        margin: theme.spacing(1),
        width: '100%',
        fontSize: '1em'
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(1),
      width: '25vw',
      fontSize: '1.1em',
      textAlign: 'center',
  },
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
      <TextField variant='outlined' className={classes.root}    InputProps={{className: classes.input}}
      id="standard-basic" label={label} onChange={onChange} />
   )
   }


   export default Input