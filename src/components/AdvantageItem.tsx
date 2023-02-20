import { Grid, GridItem, Show, Text } from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  title: string
  content: string
  icon: string
}

export function AdvantageItem({ title, content, icon }: Props) {
  return (
    <Grid
      alignItems='center'
      gap={{
        base: '1rem',
        sm: '0.5rem',
      }}
      gridTemplateColumns={{
        base: '1fr',
        sm: '40px 1fr',
      }}
      justifyItems='center'>
      <GridItem>
        <Image src={icon} width={40} height={40} alt='Truck 2D' />
      </GridItem>
      <GridItem>
        <Text textTransform='uppercase' fontSize='xs' fontWeight='bold'>
          {title}
        </Text>
        <Show above='sm'>
          <Text fontSize='xs'>{content}</Text>
        </Show>
      </GridItem>
    </Grid>
  )
}
