import API_URL from '../config'
import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import PageHeader from '../partials/PageHeader'
import SubscribeSection from '../partials/subscribe/SubscribeSection'
import Alert from '../partials/Alert'

const Contact = () => {
    const [alert, setAlert] = useState(false)
    const [validations, setValidations] = useState({
        name: null, email: null, subject: null, message: null
    })

    const contactStyle = {
        backgroundImage: 'url(/img/clouds.png)'
    }

    const handleContactFormSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const plainFormData = Object.fromEntries(formData.entries())
	    const formDataJsonString = JSON.stringify(plainFormData)

        const res = await fetch(`${ API_URL }/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formDataJsonString
        })
        .then(res => res.json())
        .catch(err => err.message)
        
        if(res.status === false && res.validation === true){
            setAlert({ type: 'danger', message: 'Complete required fields.' })
            setValidations(res.message)
        }else if(res.status === true){
            setAlert({ type: 'success', message: res.message })
            setValidations({
                name: null, email: null, subject: null, message: null
            })
            e.target.reset()
        }
    }

    return (
        <MainLayout title="Contact">
            <PageHeader title='Contact' />
            <section className="page-section">
                <div className="container">
                    <div className="py-5 px-3 rounded" style={ contactStyle }>
                        <div className="text-center text-white mb-5">
                            <h2 className="h1">Get in touch!</h2>
                            <p className="lead">We'd love to hear from you.</p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <Alert alert={ alert } setAlert={ setAlert } />
                                <form id="contact-form" onSubmit={ handleContactFormSubmit }>
                                    <div className="form-floating mb-3">
                                        <input type="text" name="name" className={ `form-control ${ validations.name && 'is-invalid' }` } placeholder="Name" />
                                        <label htmlFor="floatingInput">Name</label>
                                        {
                                            validations.name && (
                                                <div className="invalid-feedback">{ validations.name }</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" name="email" className={ `form-control ${ validations.email && 'is-invalid' }` } placeholder="Email" />
                                        <label htmlFor="floatingInput">Email</label>
                                        {
                                            validations.email && (
                                                <div className="invalid-feedback">{ validations.email }</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" name="subject" className={ `form-control ${ validations.subject && 'is-invalid' }` } placeholder="Subject" />
                                        <label htmlFor="floatingInput">Subject</label>
                                        {
                                            validations.subject && (
                                                <div className="invalid-feedback">{ validations.subject }</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea name="message" className={ `form-control ${ validations.message && 'is-invalid' }` } style={{ height: '10rem' }} placeholder="Message"></textarea>
                                        <label htmlFor="floatingInput">Message</label>
                                        {
                                            validations.message && (
                                                <div className="invalid-feedback">{ validations.message }</div>
                                            )
                                        }
                                    </div>
                                    <div className="mb-3">
                                        <button className="btn btn-orange btn-lg btn-ripple rounded-pill">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SubscribeSection />
        </MainLayout>
    )
}

export default Contact