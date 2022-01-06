import { ChakraProvider ,CSSReset} from '@chakra-ui/react'
import { ProvideAuth } from '../lib/firebase';
function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
    <ChakraProvider>
      <CSSReset/>
      <Component {...pageProps} />
    </ChakraProvider>
    </ProvideAuth>
  )
}

export default MyApp