import MainLayout from '../layouts/MainLayout'
import PageHeader from '../partials/PageHeader'
import AboutSection from '../partials/about/AboutSection'
import SubscribeSection from '../partials/SubscribeSection'


const About = () => {
    return (
        <MainLayout title="About">
            <PageHeader title='About' />
            <AboutSection />
            <SubscribeSection />
        </MainLayout>
    )
}

export default About