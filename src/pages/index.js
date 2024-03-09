import { Inter } from 'next/font/google';
import Main from '../components/main/Main.jsx';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Main />
		</>
	);
}
