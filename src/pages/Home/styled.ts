import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
`
export const ResponsiveContent = styled.div`
  display: inline-block;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 33.333333%;
  }
  @media (min-width: 1400px) {
    width: 25%;
  }
`
export const ShowMore = styled.div`
  width: 100px;
  height: 20px;
  border: 1px solid #FF9E31;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  margin-left: 50%;
  cursor: pointer;
`