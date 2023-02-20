import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from '@chakra-ui/icons'

const menu = [
  { name: 'About us', href: '#' },
  { name: 'Women', href: '#' },
  { name: 'Men', href: '#' },
  { name: 'Beauty', href: '#' },
  { name: 'Accessories', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
]

export const Header = () => {
  return (
    <Box as='header' borderBottom='1px solid' borderColor='gray.100' w='100%'>
      <Container
        as={Flex}
        size='lg'
        justifyContent='space-between'
        alignItems='center'>
        <Box margin='1rem 0'>
          <Image src='/images/logo.svg' alt='' width={100} height={48} />
        </Box>

        <nav>
          {/* TODO: find a way to remove the code duplication for responsive app */}
          <Box display={{ md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList>
                <MenuItem icon={<AddIcon />} command='⌘T'>
                  New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                  New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                  Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command='⌘O'>
                  Open File...
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Flex
            as='ul'
            display={{ base: 'none', sm: 'flex' }}
            listStyleType='none'
            gap='2rem'>
            <li>
              <Link href='#'>About us</Link>
            </li>
            <li>
              <Link href='#'>Woman</Link>
            </li>
            <li>
              <Link href='#'>Men</Link>
            </li>
            <li>
              <Link href='#'>Beauty</Link>
            </li>
            <li>
              <Link href='#'>Accessories</Link>
            </li>
            <li>
              <Link href='#'>Blog</Link>
            </li>
            <li>
              <Link href='#'>Contact</Link>
            </li>
          </Flex>
        </nav>

        <div className='commerce-menu'>
          <Flex as='ul' listStyleType='none' gap='1.5rem'>
            <li>
              <Link href='#'>
                <Image
                  src='/icon/ico-search.svg'
                  alt=''
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image
                  src='/icon/ico-globe.svg'
                  alt=''
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src='/icon/ico-user.svg' alt='' width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href='#'>
                <Image src='/icon/ico-bag.svg' alt='' width={24} height={24} />
              </Link>
            </li>
          </Flex>
        </div>
      </Container>
    </Box>
  )
}
