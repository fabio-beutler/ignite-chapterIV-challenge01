import {
  Box,
  Center,
  Divider,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  VStack
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/swiper.css'

import Background from '../assets/Background.jpg'
import AirplaneImage from '../assets/Airplane.svg'

import benefitsList from '../constants/benefitsList'
import continents from '../constants/continentsSwiper'
import { Header } from '../components/Header'

export const Homepage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <VStack
        as='section'
        bgImage={Background}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPos='top'
        px={['4', '10', '16', '36']}
        py={['7', '10', '16', '20']}
        position='relative'
        alignItems='flex-start'
      >
        <Heading
          as='h1'
          fontSize={['xl', '2xl', '4xl']}
          fontWeight='medium'
          color='light.headingsAndText'
          mb='5'
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Heading>
        <Text color='light.info' fontSize={['sm', 'md', 'xl']} maxW='xl'>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
        <Image
          src={AirplaneImage}
          alt='Avião explorador'
          position='absolute'
          bottom={'-30px'}
          right={['10', '10', '10', '10', '24']}
          display={['none', 'none', 'none', 'none', 'block']}
          zIndex={10}
          rotate='10deg'
        />
      </VStack>
      <List
        display='flex'
        flexWrap='wrap'
        columnGap='14'
        rowGap='6'
        m='8'
        alignItems='center'
        justifyContent='center'
      >
        {benefitsList.map((item, index) => (
          <VStack key={index}>
            <Image
              w={['8', '10', '12', '14']}
              display={['none', 'block', 'block']}
              src={item.icon}
              alt={item.title}
            />
            <ListItem
              key={index}
              display='flex'
              alignItems='center'
              gap='2'
              fontSize={['lg', 'lg', 'xl', '2xl']}
              color='dark.headingsAndText'
              _before={{
                display: ['block', 'none', 'none'],
                height: '8px',
                width: '8px',
                background: 'highlight.500',
                content: '""',
                left: '-3',
                top: '40%',
                borderRadius: '50%'
              }}
            >
              {item.title}
            </ListItem>
          </VStack>
        ))}
      </List>
      <Divider
        opacity={1}
        border='2'
        borderStyle='solid'
        borderColor='dark.headingsAndText'
        w='16'
        margin='0 auto'
      />
      <Heading
        as='h1'
        fontSize={['xl', '2xl', '3xl', '4xl']}
        fontWeight='medium'
        color='dark.headingsAndText'
        w='full'
        my='8'
        textAlign='center'
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>
      <Box mb={['0', '5', '10']}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
        >
          {continents.map(continent => (
            <SwiperSlide key={continent.title}>
              <Center
                flexDir='column'
                h='full'
                w='full'
                bgImage={continent.image}
                bgPos='center'
                bgSize='cover'
                bgRepeat='no-repeat'
              >
                <Heading
                  as='button'
                  fontSize={['2xl', '3xl', '4xl', '5xl']}
                  fontWeight='bold'
                  color='light.headingsAndText'
                  onClick={() => {
                    navigate(continent.title)
                  }}
                >
                  {continent.title}
                </Heading>
                <Text
                  color='light.headingsAndText'
                  fontWeight='bold'
                  fontSize={['sm', 'md', 'xl', '2xl']}
                >
                  {continent.subtitle}
                </Text>
              </Center>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  )
}
