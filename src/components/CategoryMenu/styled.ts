import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
  .button {
    color: black;
    border: 1px solid #ff9900;
    cursor: pointer;
    padding: 8px 16px;
    transition: background-color 200ms linear;
  }
  .active {
    background: #ff9900;
  }
  span:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  span:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`