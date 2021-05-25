import React, { useState } from 'react';
import { CreatePost } from '../../../models/models';
import { useDispatch } from 'react-redux';
import { Header } from './TeacherCreatePost-style';
import { sendPostData } from '../../../store/actionsToApi';
import TeacherCreateContent from '../TeacherCreateContent/TeacherCreateContent';

type TeacherCreatePostProps = {};

export type PostContent = {
  value: string;
  label: string;
  name: string;
  placeholder: string;
  helperText: string;
  isTextArea: boolean;
};

const TeacherCreatePost: React.FC<TeacherCreatePostProps> = () => {
  const postInitialState: CreatePost = {
    title: '',
    content: '',
    photo: ''
  };

  const [post, setPost] = useState<CreatePost>(postInitialState);

  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };
  const postData = () => {
    dispatch(sendPostData(post));
    setPost(postInitialState);
  };

  const createPostTextFields: PostContent[] = [
    {
      value: post.title,
      label: 'Tytuł',
      name: 'title',
      placeholder: 'Tytuł',
      helperText: '',
      isTextArea: false
    },
    {
      value: post.photo,
      label: 'Ilustracja',
      name: 'photo',
      helperText: 'Podaj link do zdjęcia',
      placeholder:
        'https://cdn.pixabay.com/photo/2020/01/11/13/22/freedom-4757533_960_720.jpg',
      isTextArea: false
    },
    {
      value: post.content,
      label: '',
      name: 'content',
      helperText: '',
      placeholder: 'Treść Twojego artykułu',
      isTextArea: true
    }
  ];
  return (
    <>
      <Header>Stwórz Post</Header>
      <TeacherCreateContent
        inputHandler={inputHandler}
        postData={postData}
        createTextFields={createPostTextFields}
      />
    </>
  );
};

export default TeacherCreatePost;
