import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { Heading, Button, Box } from '@chakra-ui/react'

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

type Props = {
  products: Product[]
}

export default function Home({ products }: Props) {
  return (
    <>
      <Head>
        <title>e Commerce Project</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Button>Button</Button>
        <ol>
          {products.map((product) => {
            return <li key={product.id}><strong>{product.title}</strong></li>
          })}
        </ol>
      </main>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )
  return {
    props: { products },
  }
}
