import Head from 'next/head'
import Test from '../../components/Test'
import Link from 'next/link';


function Home() {
  return (
    <div>
      <Head>
        <title>app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Test />
      <Link href='/sobre'>Sobre</Link>
      <Link href='/api/tempo'>Tempo</Link>
    </div>
  )
}

export default Home;