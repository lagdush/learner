import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:nth-child(odd) {
    grid-row: span 2;
    grid-column: span 2;
  }
  &:nth-child(even) {
    grid-column: span 3;
    grid-row: span 3;
  }
`;
export const PostTitle = styled.p`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  font-size: 0.7em;
  text-align: center;
  font-weight: 600;
  color: white;
  text-shadow: ${(props) => props.theme.backgroundColor} 2px 2px 2px;
`;

export const Post = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 10px solid black;
  filter: grayscale(100%);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    filter: grayscale(0);
  }
`;

export const ContentInnerGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  grid-auto-flow: dense;
  align-items: center;
`;

export const StudentContentBox = styled.div`
  width: 90%;
  grid-column: 2/3;
  justify-self: center;
  /* @media (max-width: 1024px) {
    width: 70vw;
    grid-column: 1/3;
    justify-self: center;
  } */
`;
