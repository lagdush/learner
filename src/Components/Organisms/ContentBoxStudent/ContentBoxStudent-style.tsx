import styled from 'styled-components';

export const Container = styled.div`

`;

export const Post = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 10px solid black;
  filter: grayscale(100%);
  transition: .3s;
  &:nth-child(odd) {
    grid-row: span 2;
  }
  &:nth-child(even) {
    grid-column: span 2;
    grid-row: span 2;
  }
  &:hover {
    filter: grayscale(0);
  }
`;

export const ContentInnerGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  grid-auto-flow: dense;
  align-items: center;
`;

export const StudentContentBox = styled.div`
  width: 90%;
  background: #ffffff;
  grid-column: 2/3;
  justify-self: center;
  /* @media (max-width: 1024px) {
    width: 70vw;
    grid-column: 1/3;
    justify-self: center;
  } */
`;