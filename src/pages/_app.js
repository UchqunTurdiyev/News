import { Footer, Header } from '@/components';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
	return (
		<>
			<ChakraProvider>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</>
	);
}
