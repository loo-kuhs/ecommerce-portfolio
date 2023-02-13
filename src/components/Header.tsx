import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <Flex
      alignItems='center'
      as='header'
      border='1px solid'
      borderColor='gray.100'
      justifyContent='space-between'
      w='100%'
    >
      <Box margin='1rem 0'>
        <Image src='/images/logo.svg' alt='' width={100} height={48} />
      </Box>
      <nav>
        <Flex as='ul' listStyleType='none' gap='2rem'>
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
              <Image src='/icon/ico-search.svg' alt='' width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image src='/icon/ico-globe.svg' alt='' width={24} height={24} />
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
    </Flex>
  )
}
