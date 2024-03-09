import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import React from 'react';
import NewsItem from '../newsItem/newsItem';

export default function NewsList({ news }) {
	return (
		<Box>
			<Heading py={4}>All News</Heading>
			<Box className='grid grid-cols-4 gap-3'>
				{news.map((item, idx) => (
					<NewsItem item={item} key={idx} />
				))}
			</Box>
		</Box>
	);
}
