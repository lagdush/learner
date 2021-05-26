import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import ActionButton from '../../Atoms/Button/Button';
import { PostContent } from '../TeacherCreatePost/TeacherCreatePost';
import { Container } from './TeacherCreateContent-style';

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset'
}

const useStyles = makeStyles((theme) => ({
  input: {
    fontWeight: 500,
    border: 'none',
    textAlign: 'center'
  },
  root: {
    '& > *': {
      textAlign: 'center',
      fontSize: '.7rem',
      alignSelf: 'center',
      padding: '1rem'
    }
  }
}));

type TeacherCreateContentProps = {
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  postData: (e: React.SyntheticEvent) => void;
  createTextFields: PostContent[];
};

const TeacherCreateContent: React.FC<TeacherCreateContentProps> = ({
  inputHandler,
  postData,
  createTextFields
}) => {
  const classes = useStyles();

  return (
    <Container onSubmit={postData}>
      {createTextFields.map((fields) => {
        return fields.isTextArea ? (
          <TextField
            key={fields.placeholder}
            className={classes.root}
            InputProps={{ className: classes.input }}
            required
            fullWidth
            multiline
            rows="10"
            rowsMax="15"
            value={fields.value}
            onChange={inputHandler}
            name={fields.name}
            placeholder={fields.placeholder}
            helperText={fields.helperText}
          />
        ) : (
          <TextField
            key={fields.placeholder}
            className={classes.root}
            InputProps={{ className: classes.input }}
            onChange={inputHandler}
            required
            fullWidth
            value={fields.value}
            label={fields.label}
            name={fields.name}
            placeholder={fields.placeholder}
            helperText={fields.helperText}
          />
        );
      })}
      <ActionButton type={ButtonType.SUBMIT} text="Wyślij" />
    </Container>
  );
};

export default TeacherCreateContent;
