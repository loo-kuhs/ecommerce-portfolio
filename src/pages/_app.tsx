import {
  ChakraProvider,
  defineStyle,
  defineStyleConfig,
  extendTheme,
} from '@chakra-ui/react'
import '@fontsource/spartan/400.css'
import '@fontsource/spartan/700.css'
import type { AppProps } from 'next/app'

const sizes = {
  lg: defineStyle({
    maxW: '1110px',
    p: '0',
  }),
}
export const containerTheme = defineStyleConfig({ sizes })

const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'none',
  },
  defaultProps: {
    colorScheme: 'brand',
  },
})

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f2f2f2',
      200: '#d9d9d9',
      300: '#bfbfbf',
      400: '#a6a6a6',
      500: '#8c8c8c',
      600: '#737373',
      700: '#595959',
      800: '#2a2a2a',
      900: '#121212',
    },
  },
  fonts: {
    heading: `"Spartan", sans-serif`,
    body: `"Spartan", sans-serif`,
  },
  components: {
    Button: buttonTheme,
    Container: containerTheme,
  },
})



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
