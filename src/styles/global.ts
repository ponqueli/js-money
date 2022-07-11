import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #FFFFFF;
    --red: #E52E4D;
    --blue: #5429cc;
    --green: #33CC95;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969CB3;
    --input-background: #e7e9ee;
    --border-color: #d7d7d7;
    --border-color-darker: "#aaa";
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }

    @media (max-width: 320px) {
      font-size: 75%; //12px
    }
  }

  //REM - 1rem = 16px (tamanho do font-size da nossa página)	

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 36rem;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.3125rem;
  }
  .react-modal-close{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.7);
    }
  }
`;