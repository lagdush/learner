import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
  background-color: ${(props) => props.theme.backgroundColor};
`;
