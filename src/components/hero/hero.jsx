import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import HeroList from './heroList';

export default function Hero({ news }) {
	let heroCarousel;
	if (news[0]?.urlToImage) {
		heroCarousel = news[0];
	} else {
		heroCarousel = news[1];
	}
	let heroCarousel2;
	if (news[0]?.urlToImage) {
		heroCarousel2 = news[2];
	} else {
		heroCarousel2 = news[3];
	}
	return (
		<Box w={'full'} h={'600px'} py={4}>
			<Flex gap={10}>
				{/* Hero left  */}
				<Box w={'full'} h={'400px'} position={'relative'} borderRadius={'2xl'} zIndex={'999'}>
					<CarouselProvider naturalSlideWidth={100} naturalSlideHeight={60} totalSlides={2}>
						<Slider>
							<Slide index={0}>
								<Box borderRadius={'2xl'} className='w-full h-full absolute top-0 bg-gradient-to-t from-black transparent'></Box>
								<Box w={'full'} h={'full'}>
									<Image
										w={'full'}
										h={'full'}
										objectFit={'cover'}
										borderRadius={'2xl'}
										src={heroCarousel?.urlToImage}
										alt={heroCarousel?.title}
									/>
								</Box>
								<Box position={'absolute'} bottom={6} px={10}>
									<Text color={'white'} fontSize={'xl'}>
										{heroCarousel?.title}
									</Text>
								</Box>
							</Slide>
							<Slide index={1}>
								<Box borderRadius={'2xl'} className='w-full h-full absolute top-0 bg-gradient-to-t from-black transparent'></Box>
								<Image
									w={'full'}
									h={'full'}
									objectFit={'cover'}
									borderRadius={'2xl'}
									src={heroCarousel2?.urlToImage}
									alt={heroCarousel2?.title}
								/>
								<Box position={'absolute'} bottom={6} px={10}>
									<Text color={'white'} fontSize={'xl'}>
										{heroCarousel2?.title}
									</Text>
								</Box>
							</Slide>
						</Slider>
						<Box w={'full'} px={6} display={'flex'} justifyContent={'space-between'} gap={5} position={'absolute'} top={'220px'}>
							<ButtonBack>
								<FaAngleLeft size={'30px'} />
							</ButtonBack>
							<ButtonNext>
								<FaAngleRight size={'30px'} />
							</ButtonNext>
						</Box>
					</CarouselProvider>
				</Box>
				{/* Hero left end */}

				{/* Hero right  */}
				<Box w={'50%'} h={'600px'} overflowY={'scroll'}>
					{news.map((el, idx) => (
						<Box key={idx} py={1}>
							<HeroList el={el} />
							<Divider mt={2} />
						</Box>
					))}
				</Box>
				{/* Hero right end */}
			</Flex>
		</Box>
	);
}
