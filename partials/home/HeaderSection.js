import Image from 'next/image'

const HeaderSection = () => {
    return (
        <section className="master-header">
            <h1>Jozi</h1>
            <p>Discover great places in Jozi</p>
            <div className="scroll">
                <a href="/#explore-section"><i className="fas fa-chevron-down"></i></a>
            </div>
            <div className="birds">
                <Image src="/img/birds.png" width="646" height="434" />
            </div>
            <div className="skyline">
                <Image src="/img/skyline.png" width="1960" height="897" />
            </div>
        </section>
    )
}

export default HeaderSection