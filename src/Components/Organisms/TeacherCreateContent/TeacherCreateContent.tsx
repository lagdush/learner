import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreatePost } from '../../../models/models';
import { sendPostData } from '../../../store/actionsToApi';
import ActionButton from '../../Atoms/Button/Button';
import { Container, StyledTextField } from './TeacherCreateContent-style';

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
      alignSelf: 'center'
    }
  }
}));

type TeacherCreateContentProps = {};

const TeacherCreateContent: React.FC<TeacherCreateContentProps> = () => {
  const postInitialState: CreatePost = {
    title: '',
    content: '',
    photo: ''
  };
  const [post, setPost] = useState<CreatePost>(postInitialState);
  const dispatch = useDispatch();
  const classes = useStyles();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <h1>Stwórz Post</h1>
      <StyledTextField
        className={classes.root}
        InputProps={{ className: classes.input }}
        onChange={inputHandler}
        required
        autoFocus
        fullWidth
        value={post.title}
        label="Tytuł"
        name="title"
        placeholder="Tytuł"
      />
      <StyledTextField
        className={classes.root}
        InputProps={{ className: classes.input }}
        onChange={inputHandler}
        required
        fullWidth
        value={post.photo}
        label="Ilustracja"
        name="photo"
        placeholder="https://cdn.pixabay.com/photo/2020/01/11/13/22/freedom-4757533_960_720.jpg"
        helperText="Podaj url do ilustracji"
      />
      <StyledTextField
        className={classes.root}
        InputProps={{ className: classes.input }}
        required
        fullWidth
        multiline
        rows="5"
        rowsMax="10"
        value={post.content}
        onChange={inputHandler}
        name="content"
        placeholder="Treść Twojego artykułu"
      />

      <ActionButton
        text="Wyślij"
        fetch={() => {
          dispatch(sendPostData(post));
          setPost(postInitialState);
        }}
      />
    </Container>
  );
};

export default TeacherCreateContent;
