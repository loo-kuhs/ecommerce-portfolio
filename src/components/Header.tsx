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
  Show,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { menuHeader } from '@/utils/constants'

export const Header = () => {
  return (
    <Box as='header' borderBottom='1px solid' borderColor='gray.100' w='100%'>
      <Container
        as={Flex}
        alignItems='center'
        justifyContent='space-between'
        size='lg'>
        <Flex gap='0.5rem' margin='1rem 0'>
          <Show below='sm'>
            <Box as='nav'>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                />
                <MenuList>
                  {menuHeader.map((item) => {
                    return (
                      <MenuItem key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </Menu>
            </Box>
          </Show>
          <Image src='/images/logo.svg' alt='' width={100} height={48} />
        </Flex>

        <Show above='sm'>
          <Box as='nav'>
            <Flex as='ul' listStyleType='none' gap='2rem'>
              {menuHeader.map((item) => {
                return (
                  <li key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                )
              })}
            </Flex>
          </Box>
        </Show>

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
