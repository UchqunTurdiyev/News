import { useEffect, useState } from 'react';
import { Hero } from '..';
import { data } from 'autoprefixer';
import NewsList from '../newsList/newsList';
import { Box } from '@chakra-ui/react';

export default function Home() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-02-09&sortBy=publishedAt&apiKey=cc8bfc9586a04f57972fa299f067c4a1')
			.then(res => res.json())
			.then(data => setNews(data.articles));
	}, []);

	return (
		<Box px={20}>
			<Hero news={news} />
			<NewsList news={news} />
		</Box>
	);
}
