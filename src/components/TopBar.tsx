import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export const TopBar = () => {
  return (
    <Flex
      bg='black'
      color='white'
      fontSize='xs'
      justifyContent={'space-between'}
      p={2}
      w='100%'
    >
      <Flex gap='1.5rem'>
        <Flex as={Link} href='#' alignItems='center' gap='0.5rem'>
          <Image
            src='/icon/ico-small-phone.svg'
            alt=''
            width={24}
            height={24}
          />
          +38 (050) 12 34 567
        </Flex>

        <Flex as={Link} href='#' alignItems='center' gap='0.5rem'>
          <Image
            src='/icon/ico-small-location.svg'
            alt=''
            width={24}
            height={24}
          />
          Ukraine, Kyiv, Khreshchatyk
        </Flex>

        <Flex as={Link} href='#' alignItems='center' gap='0.5rem'>
          <Image
            src='/icon/ico-small-clock.svg'
            alt=''
            width={24}
            height={24}
          />
          All week 24/7
        </Flex>
      </Flex>

      <Flex gap={'1rem'}>
        <Link href='#'>
          <Image src='/icon/ico-small-fb.svg' alt='' width={24} height={24} />
        </Link>

        <Link href='#'>
          <Image src='/icon/ico-small-tw.svg' alt='' width={24} height={24} />
        </Link>

        <Link href='#'>
          <Image src='/icon/ico-small-ig.svg' alt='' width={24} height={24} />
        </Link>

        <Link href='#'>
          <Image src='/icon/ico-small-pin.svg' alt='' width={24} height={24} />
        </Link>
      </Flex>
    </Flex>
  )
}
