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
        md: '1rem',
        lg: '2rem',
      }}
      templateColumns={{
        base: 'repeat(2, 1fr)',
        md: '2fr repeat(2, 1fr)',
      }}
      templateRows={{
        base: '130px 154px 130px',
        md: '200px 260px',
      }}
      templateAreas={{
        base: `
          'cat1 cat1'
          'cat2 cat3'
          'cat4 cat4'`,
        md: `
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
              md: '1rem',
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
