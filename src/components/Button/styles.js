import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 10px;
  margin: 10px;
  color: ${(props) => props.theme.buttonColor};
  background-color: ${(props) => props.theme.buttonBackgroundColor};
`;
