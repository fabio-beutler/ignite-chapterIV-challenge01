import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'background'
      }
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif'
  },
  colors: {
    highlight: {
      300: '#FFBA0880',
      500: '#FFBA08'
    },
    gray: {
      250: '#F5F8FA',
      350: '#DADADA',
      450: '#999999',
      550: '#47585B'
    },
    light: {
      white: '#FFFFFF',
      headingsAndText: '#F5F8FA',
      info: '#DADADA'
    },
    dark: {
      black: '#000000',
      headingsAndText: '#47585B',
      info: '#999999'
    },
    background: '#F5F8FA'
  }
})
