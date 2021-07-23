import MainLayout from '../layouts/MainLayout'
import PageHeader from '../partials/PageHeader'

const PageNotFound = () => {
    return (
        <MainLayout>
            <PageHeader title='404' />
            <section className="page-section">
                <div className="container">
                    <h1>404</h1>
                </div>
            </section>
        </MainLayout>
    )
}

export default PageNotFound