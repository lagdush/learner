import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addQuestion,
  createQuizSection,
  resetAnswersArray
} from '../../../store/reducer';
import StyledTextField from '../../Atoms/StyledTextField/StyledTextField';
import TeacherCreateAnswer from '../TeacherCreateAnswer/TeacherCreateAnswer';
import { Container } from './TeacherCreateQuestion-style';

type TeacherCreateQuestionProps = {};

const TeacherCreateQuestion: React.FC<TeacherCreateQuestionProps> = () => {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState('');
  const [component, addComponent] = useState<any>([]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };
  const addComponentOnClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addComponent(
      component.concat(<TeacherCreateAnswer key={component.length} />)
    );
  };
  //   TODO: napraw usuwanie elementów
  // TODO: MOdal do zatwierdzenia pytania
  // TODO: Modal wyświetla treść pytania oraz odpowiedzi, zaznacza odpowiedź prawidłową
  // TODO: Jeżeli odpowiedź nie zawiera poprawnej odpowiedzi modal ma o tym poinformować i uniemozliwić zatwierdzenie pytaniaoraz odpowiedżi
  // TODO: Modal ma mieć dwa przycski: 1) ZAtwierdź i dodaj pytanie, 2) Wróć i popraw
  // FIXME: CZy potrzebne jest dodawanie kolejnych komponentów? Jeżeli tak to zatwierdzone nie powinny mieć mozliwości edycji treści a mozliwość usuwania
  //   const removeComponentOnClick = (e: React.SyntheticEvent) => {
  //     e.preventDefault();
  //     addComponent(component.pop());
  //     console.log(component);
  //   };

  return (
    <>
      <StyledTextField
        inputHandler={inputHandler}
        customization={{
          value: question,
          name: 'question',
          placeholder: 'Dlaczego... ?',
          label: 'Wprowadź pytanie'
        }}
      />
      <TeacherCreateAnswer />
      {component}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          color="secondary"
          style={{ fontSize: '.7em' }}
          onClick={addComponentOnClick}
        >
          Dodaj kolejną odpowiedź
        </Button>
        {/* <button onClick={removeComponentOnClick}>Usuń odpowiedź</button> */}
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            dispatch({ type: addQuestion.type, payload: question });
            dispatch({ type: createQuizSection.type });
            dispatch({ type: resetAnswersArray.type });
          }}
        >
          Zatwierdź pytanie
        </Button>
      </div>
    </>
  );
};

export default TeacherCreateQuestion;
