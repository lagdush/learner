import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Container = styled.div`
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px 0 0 0;
  max-width: 80%;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 2rem;
`;
export const style = {};

export default style;
