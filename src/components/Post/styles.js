import styled from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;

  opacity: ${(props) => (props.removed ? 0.3 : 1)};
`;
