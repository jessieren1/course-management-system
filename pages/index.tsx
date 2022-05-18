import type { NextPage } from 'next'
import Head from 'next/head'
import CustomLayout, { siteTitle } from '../components/customLayout'

const Home: NextPage = () => {
  return (
    <CustomLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>main section</section>
    </CustomLayout>
  )
}

export default Home
