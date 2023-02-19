import Image from 'next/image'

import { Grid, GridItem, GridItemProps } from '@chakra-ui/react'

import { Categories } from '@/types/Categories'
import { CenteredLabel } from './CenteredLabel'

import { slugify } from '@/utils/slugify'

type Props = {
  categories: Categories[]
}

export const HomeHeroCategories = ({ categories }: Props) => {
  return (
    <Grid
      gap='30px'
      templateColumns='540px 255px 255px'
      templateRows='200px 260px'>
      {categories.map((category, key) => {
        const slugifiedCategory = slugify(category)
        const imgCategoryUrl = `/images/pic-categories-${slugifiedCategory}.jpg`

        const gridItemProps: GridItemProps = {
          position: 'relative',
          w: '100%',
          h: '100%',
        }

        if (key === 0) {
          gridItemProps.rowSpan = 2
        }

        if (key === categories.length - 1) {
          gridItemProps.colSpan = 2
        }

        return (
          <GridItem {...gridItemProps} key={key}>
            <Image src={imgCategoryUrl} alt={category} fill={true} />
            <CenteredLabel>{category}</CenteredLabel>
          </GridItem>
        )
      })}
    </Grid>
  )
}
