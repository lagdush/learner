import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  place-items: center;
  height: 80vh;
`;

export const FormContainer = styled.form`
  grid-column: 1/2;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-content: center;
  height: 100%;
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2em;
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2em;
  min-height: 70%;
`;

export const StyledLabel = styled.label`
  font-size: 0.7em;
  margin-right: 1em;
`;

export const StyledInput = styled.input`
  font-size: 0.4em;
  align-self: center;
  text-align: center;
`;
export const StyledTextArea = styled.textarea`
  margin-top: 2em;
  font-size: 0.4em;
  padding: 0.5em;
  width: 100%;
  min-height: 60%;
`;

export const ButtonInput = styled.input`
  align-self: center;
  padding: .5em 3em;
  text-align: center;
  background: ${(props) => props.theme.navColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border: none;
  color: ${(props) => props.theme.fontColor};
  font-size: 0.5em;
  font-family: Merriweather Sans;
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 1em;
  }
`;

