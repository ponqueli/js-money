import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;
  color: var(--text-title);

  @media screen and (max-width: 48rem){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 30rem){
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface CardContainerProps {
  isPositive?: boolean;
}
const colors = {
  green: "#33CC95",
  red: "#E52E4D",
}
export const CardContainer = styled.div<CardContainerProps>`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.3125rem;
  color: var(--text);

  &.highlight-background{
    background: ${(props) => props.isPositive 
      ? colors.green
      : colors.red
    };
    color: var(--shape);
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.main`
  display: flex;

  strong{
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;