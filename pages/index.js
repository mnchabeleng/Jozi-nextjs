import API_URL from '../config'
import MainLayout from '../layouts/MainLayout'
import HeaderSection from '../partials/home/HeaderSection'
import ExploreSection from '../partials/home/ExploreSection'
import AboutSection from '../partials/about/AboutSection'
import SubscribeSection from '../partials/SubscribeSection'

const Home = ({ categories }) => {
  return (
    <MainLayout title="Jozi">
      <HeaderSection />
      <ExploreSection categories={ categories } />
      <AboutSection />
      <SubscribeSection />
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const categories = await fetch(`${ API_URL }/categories`)
                    .then(res => res.json())

  return {
      props: {
        categories
      }
  }
}

export default Home