import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.25rem;
    margin-bottom: 2rem;
    
    @media screen and (max-width: 69rem) {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.3125rem;
    background: var(--input-background);
    border: 1px solid var(--border-color);
    font-weight: 400;
    font-size: 1rem;

    ::placeholder {
      color: var(--text-body);
    }
    & + input {
      margin-top: 1rem;
    }

    @media screen and (max-width: 69rem) {
      height: 3rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    background: var(--green);
    color: var(--shape);
    border-radius: 0.3125rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media screen and (max-width: 69rem) {
      height: 3rem;
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
}

export const RadioBox = styled.button<RadioBoxProps>`
  border: 1px solid var(--border-color);
  height: 4rem;
  border-radius: 0.3125rem;
  
  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };
  font-weight: 400;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  @media screen and (max-width: 69rem) {
    height: 3rem;
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
  
  img{
    width: 1.25rem;
    height: 1.25rem;
  }

  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;