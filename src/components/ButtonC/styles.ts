import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #0DD8E5;
  height: 36px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  padding: 0px 10px;

  &:hover {
    background: ${shade(0.2, '#0DD8E5')};
  }
`;
