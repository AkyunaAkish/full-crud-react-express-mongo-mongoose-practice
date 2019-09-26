import styled from 'styled-components';

export default styled.button`
  background: ${props => props.bgColor || 'dodgerblue'};
  color: white;
  border: none;
  font-size: 20px;
`;