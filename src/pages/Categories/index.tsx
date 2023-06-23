import ProductList from '../../components/ProductList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starswars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'ação',
    description:
      'Resident evil 4, conhecido no japão como Biohazard 4, é um jogo eletronico de survival horror',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'ação',
    description:
      'Resident evil 4, conhecido no japão como Biohazard 4, é um jogo eletronico de survival horror',
    title: 'Resident Evil 4',
    system: 'PS%',
    infos: ['5%', 'R$ 280,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'ação',
    description:
      'Resident evil 4, conhecido no japão como Biohazard 4, é um jogo eletronico de survival horror',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'ação',
    description:
      'Resident evil 4, conhecido no japão como Biohazard 4, é um jogo eletronico de survival horror',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: starswars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'rpg',
    description:
      'diablo 4 é um rpg de ação em desenvolvimento pela Blizzard Entertainement.',
    title: 'diablo IV',
    system: 'Windows ',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'rpg',
    description:
      'diablo 4 é um rpg de ação em desenvolvimento pela Blizzard Entertainement.',
    title: 'diablo IV',
    system: 'Windows ',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 7,
    category: 'rpg',
    description:
      'diablo 4 é um rpg de ação em desenvolvimento pela Blizzard Entertainement.',
    title: 'diablo IV',
    system: 'Windows ',
    infos: ['17/05'],
    image: resident
  },
  {
    id: 8,
    category: 'rpg',
    description:
      'diablo 4 é um rpg de ação em desenvolvimento pela Blizzard Entertainement.',
    title: 'diablo IV',
    system: 'Windows ',
    infos: ['17/05'],
    image: diablo
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={emBreve} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="Fps" background="black" />
  </>
)

export default Categories
