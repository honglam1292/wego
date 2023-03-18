import styled from 'styled-components';

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
export const LoadingIcon = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 8px solid #c4c4c4;
    border-color: #c4c4c4 transparent;
    animation: animate 1.2s linear infinite;
  }
  @keyframes animate{
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`