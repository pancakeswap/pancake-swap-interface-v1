import { createGlobalStyle } from 'styled-components'

export const FixedGlobalStyle = createGlobalStyle`
    html, input, textarea, button {
      font-family: Kanit, 'Inter',sans-serif;
      letter-spacing: -0.018em;
      font-display: fallback;
    }
    @supports (font-variation-settings: normal) {
      html, input, textarea, button {
        font-family: Kanit, 'Inter',sans-serif;
      }
    }

    html,
    body {
      margin: 0;
      padding: 0;
    }

    * {
      box-sizing: border-box;
    }

    button {
      user-select: none;
    }

    html {
      font-family: Kanit,'Inter', sans-serif;
      font-size: 16px;
      font-variant: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`

export const ThemedGlobalStyle = createGlobalStyle`
    html {
      color: ${({ theme }) => theme.colors.text1};
      background-color:${({ theme }) => theme.colors.bg0};
    }

    body {
      min-height: 100vh;
      background-position: 0 -30vh;
      background-repeat: no-repeat;
    }
`
