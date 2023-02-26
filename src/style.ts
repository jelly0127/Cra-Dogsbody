import { createGlobalStyle } from 'styled-components'

interface CustomTheme {
  grey1: string
  grey2: string
  grey3: string
  grey4: string
  grey5: string
  grey6: string
  hoverBc: string
  fontLargest: string
  fontLarge: string
  fontNormal: string
  fontSmall: string
  primaryColor: string
  borderColor: string
  darkMode?: boolean

  bgUrl: string
}

//   strong {
//     font-weight: bold;
//   }
//   button {
//   border-radius: 8px;
//   border: 1px solid transparent;
//   padding: 0.6em 1.2em;
//   font-size: 1em;
//   font-weight: 500;
//   font-family: inherit;
//   background-color: #1a1a1a;
//   cursor: pointer;
//   transition: border-color 0.25s;
// }
// button:hover {
//   border-color: #646cff;
// }
// button:focus,
// button:focus-visible {
//   outline: 4px auto -webkit-focus-ring-color;
// }
//   div, a, button, li {
//     display: flex;
//     flex-direction: column;
//     box-sizing: border-box;
//     :hover {
//   color: #535bf2;
// }
//   }

// `
const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
    font-size: 16px;
    padding: 0;
  background-color: #1a1a1a;

  }
  #root{
    position: relative;
      min-height: 100vh;
      --animate-duration: 2s !important;
      --animate-delay: 0.9s !important;
  }

  body {
   
  .adm-mask{
    opacity: 0.3 !important;
  }
  }

  body, textarea, input, button {
    line-height: 1;
  }

  body, div, p {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  button, a {
    padding: 0;
    margin: 0;
    border: 0;
    background: transparent;
    
  }

  a {
    color: inherit;
    text-decoration: none;
    :focus {
      outline: none;
    }
  }

  img {
    display: block;
  }

  strong {
    font-weight: bold;
  }

  div, a, button, li {
    display: flex;
    box-sizing: border-box;
  }
  
`
const defaultTheme: CustomTheme = {
  grey1: '#333333',
  grey2: '#666666',
  grey3: '#333333',
  grey4: '#999999',
  grey5: '#FF3838',
  grey6: '#3D8DE2',
  hoverBc: '#EBEBEB',
  fontLargest: '24px',
  fontLarge: '20px',
  fontNormal: '16px',
  fontSmall: '14px',
  primaryColor: '#0057ff;',
  borderColor: '#3333333',
  darkMode: false,
  bgUrl: '',
}

export { GlobalStyle, defaultTheme, flexCenter }
