import EuropeImage from '../assets/Europe.jpg'
import OceaniaImage from '../assets/Oceania.jpg'
import AfricaImage from '../assets/Africa.jpg'
import AsiaImage from '../assets/Asia.jpg'
import SouthAmericaImage from '../assets/SouthAmerica.jpg'
import NorthAmericaImage from '../assets/NorthAmerica.jpg'

import { Continents } from './continentsData'

export default [
  {
    title: Continents.Europe,
    subtitle: 'O continente mais antigo.',
    image: EuropeImage
  },
  {
    title: Continents.Oceania,
    subtitle: 'A vida moderna.',
    image: OceaniaImage
  },
  {
    title: Continents.Africa,
    subtitle: 'A natureza vive.',
    image: AfricaImage
  },
  {
    title: Continents.Asia,
    subtitle: 'O futuro está aqui.',
    image: AsiaImage
  },
  {
    title: Continents.SouthAmerica,
    subtitle: 'A miscigenação dos povos.',
    image: SouthAmericaImage
  },
  {
    title: Continents.NorthAmerica,
    subtitle: 'O centro do mundo',
    image: NorthAmericaImage
  }
]
