import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

type LocationHeaderProps = {};

const LocationHeader: React.FC<LocationHeaderProps> = () => {
  const [title, setTitle] = useState<string>();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/student/knowledge':
        setTitle('Baza wiedzy');
        break;
      case '/student/quizzes':
        setTitle('Quizy');
        break;
      case '/student/news':
        setTitle('Aktualności');
        break;
      case '/student/questions':
        setTitle('Zadaj pytanie');
        break;
      default:
        setTitle('Aktualności');
    }
  }, [pathname]);
  return <h3>{title}</h3>;
};

export default LocationHeader;
