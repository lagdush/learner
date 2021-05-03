import styled from 'styled-components';

export const Button = styled.button`
  margin: 2em;
  width: 50%;
  padding: 0.4em;
  text-align: center;
  background: ${(props) => props.theme.mainColor};
  box-shadow: 9px 4px 17px 4px rgba(0, 0, 0, 0.21);
  border: none;
  color: #fff;
  font-size: 0.5em;
  font-family: Merriweather Sans;
  cursor: pointer;
  transition: 0.3s linear;
  &:hover {
    border-radius: 26.5px;
  }
`;
