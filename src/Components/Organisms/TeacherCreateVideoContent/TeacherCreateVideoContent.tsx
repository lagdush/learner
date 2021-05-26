import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateVideoContent } from '../../../models/models';
import { sendVideoData } from '../../../store/actionsToApi';
import TeacherCreateContent from '../TeacherCreateContent/TeacherCreateContent';
import { Header } from '../TeacherCreatePost/TeacherCreatePost-style';

type TeacherCreateVideoContentProps = {};

type VideoContent = {
  value: string;
  label: string;
  name: string;
  placeholder: string;
  helperText: string;
  isTextArea: boolean;
};

const TeacherCreateVideoContent: React.FC<TeacherCreateVideoContentProps> = () => {
  const videoInitialState: CreateVideoContent = {
    title: '',
    url: '',
    photo: ''
  };

  const [videoContent, setVideoContent] = useState<CreateVideoContent>(
    videoInitialState
  );

  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoContent({
      ...videoContent,
      [e.target.name]: e.target.value
    });
  };
  const postData = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(sendVideoData(videoContent));
    setVideoContent(videoInitialState);
  };

  const createPostTextFields: VideoContent[] = [
    {
      value: videoContent.title,
      label: 'Tytuł',
      name: 'title',
      placeholder: 'Tytuł',
      helperText: '',
      isTextArea: false
    },
    {
      value: videoContent.photo,
      label: 'Ilustracja',
      name: 'photo',
      helperText: 'Podaj link do zdjęcia',
      placeholder:
        'https://cdn.pixabay.com/photo/2020/01/11/13/22/freedom-4757533_960_720.jpg',
      isTextArea: false
    },
    {
      value: videoContent.url,
      label: 'Link do filmu',
      name: 'url',
      helperText: '',
      placeholder: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
      isTextArea: false
    }
  ];
  return (
    <>
      <Header>Stwórz Zasób Video</Header>
      <TeacherCreateContent
        inputHandler={inputHandler}
        postData={postData}
        createTextFields={createPostTextFields}
      />
    </>
  );
};

export default TeacherCreateVideoContent;
