import Head from 'next/head'

import { Header } from '@/components/Header'
import { TopBar } from '@/components/TopBar'
import { slugify } from '@/utils/slugify'
import { Grid, GridItem } from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'

type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

type Categories =
  | 'electronics'
  | 'jewelry'
  | "men's clothing"
  | "women's clothing"

type Props = {
  products: Product[]
  categories: Categories[]
}

export default function Home({ products, categories }: Props) {
  return (
    <>
      <Head>
        <title>eCommerce Project</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <TopBar />
        <Header />

        <Grid
          gap='1rem'
          templateColumns='540px 255px 255px'
          templateRows='200px 260px'
        >
          {categories.map((category, key) => {
            const slugifiedCategory = slugify(category)
            const imgCategoryUrl = `/images/pic-categories-${slugifiedCategory}.jpg`

            if (key === 0) {
              return (
                <GridItem
                  bg='red.500'
                  h='100%'
                  position='relative'
                  rowSpan={2}
                  w='100%'
                  key={key}
                >
                  <Image src={imgCategoryUrl} alt={category} fill={true} />
                </GridItem>
              )
            }

            if (key === categories.length - 1) {
              return (
                <GridItem
                  bg='gray.500'
                  colSpan={2}
                  h='100%'
                  position='relative'
                  w='100%'
                  key={key}
                >
                  <Image src={imgCategoryUrl} alt={category} fill={true} />
                </GridItem>
              )
            }
            return (
              <GridItem
                bg='blue.500'
                h='100%'
                position='relative'
                w='100%'
                key={key}
              >
                <Image src={imgCategoryUrl} alt={category} fill={true} />
              </GridItem>
            )
          })}
        </Grid>

        {/* <ol>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <strong>{product.title}</strong>
              </li>
            )
          })}
        </ol> */}
      </main>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )
  const categories = await fetch(
    'https://fakestoreapi.com/products/categories'
  ).then((res) => res.json())

  return {
    props: { products, categories },
  }
}
