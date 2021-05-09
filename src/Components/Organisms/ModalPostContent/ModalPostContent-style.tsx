import styled from 'styled-components';

export const ModalHeader = styled.h3`
  font-size: 1.5rem;

`;
export const ModalContent = styled.p`
  padding: 5%;
  font-size: 0.5rem;
  line-height: 150%;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ModalImage = styled.img`
  padding: 5%;
  width: auto;
  object-fit: cover;
  object-position: center;
`;