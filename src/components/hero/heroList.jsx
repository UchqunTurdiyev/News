import { Box, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';

export default function HeroList({ el }) {
	console.log(el);
	return (
		<Box w={'full'} h={'100px'} display={'flex'} gap={2} p={5}>
			<Stack>
				<Text fontSize={'12px'} display={'flex'} alignItems={'center'} gap={2}>
					<BsCalendarDate size={'20px'} /> {el.publishedAt.slice(0, 10)}
				</Text>
				<Text fontSize={'lg'}>{el.title.length && el.title.slice(0, 60)}</Text>
			</Stack>
		</Box>
	);
}
