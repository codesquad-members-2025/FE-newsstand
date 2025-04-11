import { GlobalStyle } from '@/styles/global'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@/styles/theme'

import Main from '@/components/Main'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App
