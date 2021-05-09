import React, { useState, useEffect } from 'react';
import LocationHeader from '../../Atoms/LocationHeader/LocationHeader';
import { StudentContentBox } from '../ContentBoxStudent/ContentBoxStudent-style';


type StudentQuestionProps = {};

const StudentQuestion: React.FC<StudentQuestionProps> = () => {
  return (
    <StudentContentBox>
      <LocationHeader />
    </StudentContentBox>
  );
};

export default StudentQuestion;
