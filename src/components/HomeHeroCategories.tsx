import Image from 'next/image'

import { Grid, GridItem } from '@chakra-ui/react'

import { Categories } from '@/types/Categories'
import { CenteredLabel } from './CenteredLabel'

import { slugify } from '@/utils/slugify'

type Props = {
  categories: Categories[]
}

export const HomeHeroCategories = ({ categories }: Props) => {
  return (
    <Grid
      gap={{
        base: '0.5rem',
        sm: '30px',
      }}
      templateColumns={{
        base: 'repeat(2, 1fr)',
        sm: '540px 255px 255px',
      }}
      templateRows={{
        base: '130px 154px 130px',
        sm: '200px 260px',
      }}
      templateAreas={{
        base: `
          'cat1 cat1'
          'cat2 cat3'
          'cat4 cat4'`,
        sm: `
          'cat1 cat2 cat3'
          'cat1 cat4 cat4'`,
      }}>
      {categories.map((category, index) => {
        const slugifiedCategory = slugify(category)
        const imgCategoryUrl = `/images/pic-categories-${slugifiedCategory}.jpg`

        // TODO: Fix the image size crop issue
        return (
          <GridItem
            fontSize={{
              base: '0.85rem',
              sm: '1rem',
            }}
            gridArea={`cat${index + 1}`}
            h='100%'
            key={index}
            position='relative'
            w='100%'>
            <Image
              alt={category}
              fill={true}
              src={imgCategoryUrl}
              style={{ objectFit: 'cover' }}
            />
            <CenteredLabel>{category}</CenteredLabel>
          </GridItem>
        )
      })}
    </Grid>
  )
}
