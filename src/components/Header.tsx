import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Center, Image } from '@chakra-ui/react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../assets/Logo.svg'

export const Header: React.FC = () => {
  const params = useParams<{ continent: string | undefined }>()
  const navigate = useNavigate()
  return (
    <Center as='header' h={[12, 16, 20]} position='relative'>
      {params.continent && (
        <ChevronLeftIcon
          position='absolute'
          left='4'
          boxSize='7'
          cursor='pointer'
          onClick={() => {
            navigate('/')
          }}
        />
      )}
      <Image src={Logo} alt='World Trip Logo' w={[20, 28, 44]} />
    </Center>
  )
}
