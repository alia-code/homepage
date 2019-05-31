import { createGlobalStyle } from 'styled-components';
import flamework from 'flamework';

const {
  reset,
  base,
  typography,
  utils,
  padding,
  margin,
  fill,
} = flamework;

export default createGlobalStyle`
  ${reset}
  ${base}
  ${utils}
  ${padding}
  ${margin}
  ${fill}
  ${typography}

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  .App-header {
    background-color: #121114;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
    text-decoration: none;
  }
`;
