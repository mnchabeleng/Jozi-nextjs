import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="keywords" content={ keywords } />
            <meta name="description" content={ description } />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <title>{ title }</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Jozi',
    keywords: 'Hotels, Guest Houeses, Arts, Culture, Adventure, Bars, Restaurants',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi.'
}

export default Meta