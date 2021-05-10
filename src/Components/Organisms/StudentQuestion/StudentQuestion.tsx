import React from 'react';
import LocationHeader from '../../Atoms/LocationHeader/LocationHeader';
import StudentForm from '../../Molecules/StudentForm/StudentForm';
import { StudentContentBox } from '../ContentBoxStudent/ContentBoxStudent-style';

type StudentQuestionProps = {};

const StudentQuestion: React.FC<StudentQuestionProps> = () => {

  return (
    <StudentContentBox>
      <LocationHeader />
      <StudentForm />
    </StudentContentBox>
  );
};

export default StudentQuestion;
