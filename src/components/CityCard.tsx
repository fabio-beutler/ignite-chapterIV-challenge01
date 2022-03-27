import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import LondonImage from '../assets/London.png'
import UnitedKingdomFlag from '../assets/UnitedKingdom.png'

type CityCardProps = {
  item: {
    banner: string
    city: string
    country: string
    flag: string
  }
}

export const CityCard: React.FC<CityCardProps> = ({ item }) => {
  return (
    <Box maxW='256px'>
      <Image
        src={item.banner}
        borderTopRadius='6'
        boxSize='60'
        objectFit='cover'
      />
      <HStack
        border='1px'
        borderTop='0'
        borderBottomRadius='6'
        borderColor='highlight.300'
        px='6'
        pt='4'
        pb='5'
        bgColor='white'
      >
        <Box w='full'>
          <Heading
            color='dark.headingsAndText'
            size='md'
            fontWeight='semibold'
            fontFamily='Barlow'
            mb='3'
          >
            {item.city}
          </Heading>
          <Text fontFamily='Barlow' color='dark.info' fontWeight='medium'>
            {item.country}
          </Text>
        </Box>
        <Image
          src={item.flag}
          boxSize='8'
          bgSize='cover'
          borderRadius='50%'
          objectFit='cover'
        />
      </HStack>
    </Box>
  )
}
