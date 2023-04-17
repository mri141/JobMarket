import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Jobs from './components/jobs'

import Image from 'next/image'

const Home: NextPage = () => {

  const cards = [
    {
      key: 1,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Card 1',
    },
    {
      key: 2,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Card 2',
    },
    {
      key: 3,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Card 3',
    },
    {
      key: 4,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Card 4',
    },
    {
      key: 5,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Card 5',
    },
    {
      key: 6,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Card 6',
    },
    {
      key: 7,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Card 7',
    },
    {
      key: 8,
      image: 'https://source.unsplash.com/random/800x600',
      title: 'Card 8',
    },
  ];


  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <Jobs title={'Browse Jobs'} subtitle={'Choose your jobs within a mitute'} cards={cards}></Jobs>
      <Footer></Footer>
    </div>
  )
}

export default Home
