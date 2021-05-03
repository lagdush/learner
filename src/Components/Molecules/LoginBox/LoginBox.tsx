import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getDataFromApi } from '../../../store/actionsToApi';
import ActionButton from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input';
import { Box } from './LoginBox-style';

type ContentBoxProps = {};

const LoginBox: React.FC<ContentBoxProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //@ts-ignore
  const { user } = useSelector((state) => state.dataFromApiForStudents);
  const inputRef = useRef<string>();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };

  useEffect(() => {
    user && history.push('/student');
  }, [user, history]);

  return (
    <Box>
      <Input onChange={inputHandler} label="Podaj swój kod dostępu" />
      <ActionButton
        fetch={() => {
          dispatch(getDataFromApi(inputRef.current));
        }}
        text="Zaloguj się"
      />
    </Box>
  );
};

export default LoginBox;
