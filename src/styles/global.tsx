import { css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'

const globalStyles = css`
  ${emotionReset},

  * {
    box-sizing: border-box;
    /* outline: 1px solid red !important; */
  }

  body {
    font-family:
      'Pretendard Variable',
      -apple-system,
      system-ui,
      sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    padding: 0px;
    border: none;
    background: none;
    cursor: pointer;
  }
`

export function GlobalStyle() {
  return <Global styles={globalStyles} />
}
