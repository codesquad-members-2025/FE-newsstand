import { GlobalStyle } from '@/styles/global'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@/styles/theme'

import MainLayout from '@/components/MainLayout'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout />
      </ThemeProvider>
    </>
  )
}

export default App
