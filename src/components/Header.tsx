import Image from 'next/image'
import Link from 'next/link'
import { Box, Container, Flex } from '@chakra-ui/react'

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
