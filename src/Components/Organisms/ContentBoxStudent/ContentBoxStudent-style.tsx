import styled from 'styled-components';
import { animated } from 'react-spring';

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
export const PostTitle = styled(animated.p)`
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

export const Post = styled(animated.img)`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    filter: grayscale(0);
  }
`;

export const ContentInnerGrid = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  grid-auto-flow: dense;
`;

export const StudentContentBox = styled.div`
  margin-top: 50px;
  width: 90%;
  grid-column: 2/3;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* @media (max-width: 1024px) {
    width: 70vw;
    grid-column: 1/3;
    justify-self: center;
  } */
`;
