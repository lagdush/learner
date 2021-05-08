import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(10%, 20%);
  height: 100vh;
  background-color: ${(props) => props.theme.mainColor};
  @media screen and (max-width: 1024px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
  }
`;




