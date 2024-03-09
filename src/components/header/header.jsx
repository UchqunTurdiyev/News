import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Header() {
	const date = new Date();
	const monthArr = [
		'Yanvar',
		'February',
		'March',
		'April',
		'May',
		'Iyun',
		'Iyul',
		'Avgust',
		'Sentabr',
		'Oktabr',
		'Noyabr',
		'December',
	];
	const weekArr = ['Sunday', 'Monday', 'Thursday', 'Wenthday', 'Serthday', 'Friday', 'Saturday'];
	return (
		<Flex width={'full'} h={20} px={20} bg={'#222'} alignItems={'center'} justifyContent={'space-between'}>
			<Flex alignItems={'center'} gap={8}>
				<Heading pr={5}>
					Ne<span className='text-red-600'>ws</span>
				</Heading>
				<Link className='text-2xl' href={'/'}>
					Home
				</Link>
				<Link className='text-2xl' href={'/about'}>
					About
				</Link>
				<Link className='text-2xl' href={'/contact'}>
					Contact
				</Link>
			</Flex>
			<Flex gap={2}>
				<Text>{weekArr[date.getDay()]},</Text>
				<Text>{monthArr[date.getMonth()]}</Text>
				<Text>{date.getDate()}</Text>
				<Text>{date.getFullYear()}</Text>
			</Flex>
		</Flex>
	);
}
