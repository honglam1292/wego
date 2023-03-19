import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  background: white;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  width: 400px;
  margin-bottom: 40px;
  svg {
    opacity: 0.7;
  }
  input {
    padding: 0 8px;
    font-size: 16px;
    border: none;
    border-radius: 0;
    :focus-visible {
    outline: none;
    }
    width: calc(100% - 40px);
  }
`