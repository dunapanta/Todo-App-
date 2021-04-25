import Head from 'next/head'

import Header from '../components/Header'

const Home = () => {
  return (
    <div className="todoapp">
      <Head>
        <title>To Do App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

export default Home
