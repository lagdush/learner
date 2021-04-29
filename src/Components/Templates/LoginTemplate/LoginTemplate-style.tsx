import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: 1fr, minmax(200px, 100vh);
grid-row-gap: 5em;
justify-items: center;
align-items: end;
align-content: end;
`;
