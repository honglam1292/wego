import styled from 'styled-components';
import { Promotion } from "../../utils/constants";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`
export const CardContent = styled.div`
  height: 300px;
  width: 300px;
  background: white;
  border-radius: 16px;
  margin-bottom: 24px;
  img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`
export const FoodInfor = styled.div`
  padding: 12px 16px 0 16px;
`
export const FoodName = styled.div`
  font-weight: 500;
`
export const Details = styled.span`
  width: 50px;
  border-radius: 8px;
  background: #eaeaea;
  padding: 4px 8px;
  font-size: 14px;
  margin-right: 8px;
`
export const GreenText = styled.span`
  color: #00c423;
`
export const PromotionCard = styled.div<{ type: string }>`
  width: 50px;
  position: absolute;
  height: 20px;
  padding: 4px 0;
  font-size: 14px;
  text-align: center;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background:  ${props => props.type === Promotion.GIFT ? '#00bfff' :
    props.type === Promotion.DISCOUNT ? '#ff8282' : '#967cff'};
`