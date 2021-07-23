import Image from 'next/image'
import { useState } from 'react'
import VideoModal from './VideoModal'

const AboutSection = () => {
    const [videoModal, setVideoModal] = useState(false)

    return (
        <>
            {
                videoModal && <VideoModal setVideoModal={ setVideoModal } />
            }
            <section className="page-section">
                <div className="container">
                <div className="container">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6 bg-primery" id="city-image">
                            <Image src="/img/city.jpg" className="rounded" width="640" height="960" alt="..." />
                            <button className="play-btn mb-4" onClick={ () => setVideoModal(true) }></button>
                        </div>
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bolder mb-3">Welcome to the city</h1>
                            <p>Johannesburg, South Africa's biggest city and capital of Gauteng province, began as a 19th-century gold-mining settlement. Its sprawling Soweto township was once home to Nelson Mandela and Desmond Tutu. Mandela’s former residence is now the Mandela House museum. Other Soweto museums that recount the struggle to end segregation include the somber Apartheid Museum and Constitution Hill, a former prison complex.</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection