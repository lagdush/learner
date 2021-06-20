import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useSpring } from 'react-spring';
import { FormImage } from '../../Atoms/Illustration/Illustration-style';
import { reduxState } from '../../../models/models';
import {
  FormContainer,
  StyledInput,
  StyledLabel,
  StyledTextArea,
  FieldWrapper,
  TextAreaWrapper,
  GridContainer,
  ButtonInput
} from './StudentForm-style';

type StudentFormProps = {};
type StateType = {
  teacherEmail: string;
  studentEmail: string;
  studentMessage: string;
};
const StudentForm: React.FC<StudentFormProps> = () => {
  const { user } = useSelector(
    (state: reduxState) => state.datasForStudents.dataFromApiForStudents
  );
  const [formState, setFormState] = useState<StateType>({
    teacherEmail: user.email,
    studentEmail: '',
    studentMessage: ''
  });

  const style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  const formHandler = (e: any) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // PROBLEM: może rozwiązaniem będzie rozbudowa backendu, logowanie dla uczniów, wysyłanie wiadomości na skrzynkę nauczyciela. Nauczyciel będzie mógł odesłać wiadmość na skrzynkę ucznia. Za każdym razem gdy pojawi się nowa wiadomośc w skrzycne nauczyciel/uczeń dostaną powiadomienie na maila. Trzeba w takim razie przebudować backend oraz dodać logowanie o autoryzacje dla ucznia. Dodać trzeba też rejestrację dla ucznia. Rejestruje nauczyciel i wysyła dane logowania dla ucznia.//
  const sendMessage = async (e: any) => {
    e.preventDefault();
    try {
      fetch('USTAL ENDPOINT', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      setFormState({
        teacherEmail: user.email,
        studentEmail: '',
        studentMessage: ''
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <GridContainer style={style}>
      <FormContainer onSubmit={sendMessage}>
        <FieldWrapper>
          <StyledLabel htmlFor="teacherEmail">
            Email do nauczyciela:
          </StyledLabel>
          <StyledInput
            type="email"
            id="teacherEmail"
            value={user.email}
            disabled
          />
        </FieldWrapper>

        <FieldWrapper>
          <StyledLabel htmlFor="studentEmail">Twój email:</StyledLabel>
          <StyledInput
            onChange={formHandler}
            type="email"
            id="studentEmail"
            name="studentEmail"
            value={formState.studentEmail}
            required
          />
        </FieldWrapper>

        <TextAreaWrapper>
          <StyledLabel htmlFor="studentMessage">Twoja wiadomość:</StyledLabel>
          <StyledTextArea
            onChange={formHandler}
            id="studentMessage"
            required
            placeholder="Mam pytanie o..."
            name="studentMessage"
            value={formState.studentMessage}
          />
        </TextAreaWrapper>
        <ButtonInput type="submit" />
      </FormContainer>
      <FormImage />
    </GridContainer>
  );
};

export default StudentForm;
