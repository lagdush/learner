import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getDataFromApi } from '../../../store/actionsToApi';
import ActionButton from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';

import { Box } from './LoginBox-style';
import { reduxState } from '../../../models/models';
import Loader from './Loader';

type ContentBoxProps = {
  startTransition: (arg: boolean) => void;
};

const LoginBox: React.FC<ContentBoxProps> = ({ startTransition }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector(
    (state: reduxState) => state.datasForStudents.dataFromApiForStudents
  );
  const loading = useSelector(
    (state: reduxState) => state.datasForStudents.loading
  );

  const inputRef = useRef<string>();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };
  const transitionStarter = () => {
    startTransition(false);
    setTimeout(() => {
      history.push('/student/');
    }, 1000);
  };

  useEffect(() => {
    user && transitionStarter();
  }, [user, history]);

  return loading ? (
    <Loader />
  ) : (
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
