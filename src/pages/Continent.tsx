import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  Tooltip
} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom'

import EuropeImage from '../assets/Europe.jpg'

import continentsData from '../constants/continentsData'
import { Header } from '../components/Header'
import { CityCard } from '../components/CityCard'
import { useEffect } from 'react'

export const Continent: React.FC = () => {
  const params = useParams<{ continent: string | undefined }>()
  const navigate = useNavigate()

  const continent = continentsData.find(
    continent => continent.title === params.continent
  )

  if (!continent) {
    useEffect(() => {
      navigate('/')
    }, [continent])
  }

  return (
    <>
      <Header />

      <Center
        position={['static', 'static', 'relative']}
        h={['36', 'xs', 'lg']}
        bgImage={EuropeImage}
        bgSize='cover'
      >
        <Heading
          position={['static', 'static', 'absolute']}
          bottom='14'
          left='36'
          color='white'
          fontSize={['2xl', '3xl', '4xl', '5xl']}
        >
          {continent?.title}
        </Heading>
      </Center>

      <Flex
        flexDir={['column', 'column', 'row']}
        my={['6', '12', '12', '20']}
        maxW='1160px'
        mx={['4', '8', '10', '12', 'auto']}
        gap={['4', '4', '10']}
      >
        <Text
          textAlign='justify'
          fontSize={['sm', 'md', 'lg', '2xl']}
          color='dark.headingsAndText'
          w='full'
        >
          {continent?.paragraph}
        </Text>
        <HStack
          justifyContent={['flex-start', 'flex-start', 'flex-end']}
          w='full'
          spacing='8'
        >
          <Box>
            <Heading
              as='h2'
              color='highlight.500'
              fontSize={['2xl', '3xl', '4xl', '5xl']}
              fontWeight='semibold'
            >
              {continent?.stats.countries}
            </Heading>
            <Text
              color='dark.headingsAndText'
              fontSize={['lg', 'xl', 'xl', '2xl']}
            >
              países
            </Text>
          </Box>
          <Box>
            <Heading
              as='h2'
              color='highlight.500'
              fontSize={['2xl', '3xl', '4xl', '5xl']}
              fontWeight='semibold'
            >
              {continent?.stats.languages}
            </Heading>
            <Text
              color='dark.headingsAndText'
              fontSize={['lg', 'xl', 'xl', '2xl']}
            >
              línguas
            </Text>
          </Box>
          <Box>
            <Heading
              as='h2'
              color='highlight.500'
              fontSize={['2xl', '3xl', '4xl', '5xl']}
              fontWeight='semibold'
            >
              {continent?.stats.top100}
            </Heading>
            <Text
              color='dark.headingsAndText'
              fontSize={['lg', 'xl', 'xl', '2xl']}
              wordBreak='revert'
              minW={['0', '0', '151px', '179px']}
            >
              cidades +100
              <Tooltip
                label={`Este continente possui ${continent?.stats.top100} das 100 cidades mais populares do mundo`}
                hasArrow
                placement='top'
                borderRadius='4'
                bgColor='dark.info'
                maxW='44'
              >
                <InfoOutlineIcon
                  boxSize={['3', '3', '4']}
                  ml='1'
                  color='dark.info'
                  opacity='.5'
                  cursor='help'
                />
              </Tooltip>
            </Text>
          </Box>
        </HStack>
      </Flex>

      <Box maxW='1160px' mx={['4', '8', '10', '12', 'auto']}>
        <Heading
          color='dark.headingsAndText'
          fontSize={['2xl', '3xl', '4xl']}
          fontWeight='medium'
        >
          Cidades +100
        </Heading>

        <Flex
          my='5'
          rowGap='10'
          columnGap='5'
          flexWrap='wrap'
          alignItems='center'
          justifyContent={['center', 'center', 'space-between']}
        >
          {continent?.top100.map(item => (
            <CityCard key={item.city} item={item} />
          ))}
        </Flex>
      </Box>
    </>
  )
}
