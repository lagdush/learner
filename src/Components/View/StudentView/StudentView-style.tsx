import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: 100vh;
`;

export const Post = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const ContentInnerGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-flow: dense;
  justify-items: center;
  align-items: center;
`;

export const StudentContentBox = styled.div`
  width: 55vw;
  height: 75vh;
  padding: 0.2rem;
  background: #ffffff;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius};
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: center;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 70vw;
    grid-column: 1/3;
    justify-self: center;
  }
`;
