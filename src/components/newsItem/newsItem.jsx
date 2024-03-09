import { Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export default function NewsItem({ item }) {
	return (
		<Card maxW='sm' h={'500px'}>
			<CardBody>
				<Image w={'full'} h={'250px'} src={item?.urlToImage} alt='Green double couch with wooden legs' borderRadius='lg' />
				<Stack mt='2' spacing='1'>
					<Heading size='md'>{item?.title.slice(0, 30)}</Heading>
					<Text>{item?.description.slice(0, 50)}</Text>
					<Text color='blue.600' fontSize='lg'>
						{item?.author?.slice(0, 30)}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				{item?.publishedAt.slice(0, 10)}
				<Text pl={6}>{item.source.name}</Text>
			</CardFooter>
		</Card>
	);
}
