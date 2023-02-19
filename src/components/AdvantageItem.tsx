import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  title: string
  content: string
  icon: string
}

export function AdvantageItem({ title, content, icon }: Props) {
  return (
    <Grid gridTemplateColumns='40px 1fr' alignItems='center' gap='1rem'>
      <GridItem>
        <Image src={icon} width={40} height={40} alt='Truck 2D' />
      </GridItem>
      <GridItem>
        <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>
          {title}
        </Text>
        <Text fontSize='xs'>{content}</Text>
      </GridItem>
    </Grid>
  )
}
