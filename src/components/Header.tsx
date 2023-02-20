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
import { HamburgerIcon } from '@chakra-ui/icons'
import { menuHeader } from '@/utils/constants'

export const Header = () => {
  return (
    <Box as='header' borderBottom='1px solid' borderColor='gray.100' w='100%'>
      <Container
        as={Flex}
        size='lg'
        justifyContent='space-between'
        alignItems='center'>
        <Flex gap='0.5rem' margin='1rem 0'>
          {/* TODO: find a way to remove the code duplication for responsive app */}
          <Box as='nav' display={{ md: 'none' }}>
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
          <Image src='/images/logo.svg' alt='' width={100} height={48} />
        </Flex>

        <Box as='nav'>
          <Flex
            as='ul'
            display={{ base: 'none', sm: 'flex' }}
            listStyleType='none'
            gap='2rem'>
            {menuHeader.map((item) => {
              return (
                <li key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              )
            })}
          </Flex>
        </Box>

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
