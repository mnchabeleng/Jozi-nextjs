import API_URL from '../config'
import { useState } from 'react'
import SubscribeModal from './SubscribeModal'

const SubscribeSection = () => {
    const [validations, setValidations] = useState({email: null})
    const [subscribeModal, setSubscribeModal] = useState(false)

    const handleSubscribeForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const plainFormData = Object.fromEntries(formData.entries())
	    const formDataJsonString = JSON.stringify(plainFormData)

        const res = await fetch(`${ API_URL }/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formDataJsonString
        })
        .then(res => res.json())
        .catch(err => err.message)

        if(res.status === false && res.validation === true){
            setValidations(res.message)
        }else if(res.status === true){
            e.target.reset()
            setValidations({email: null})
            setSubscribeModal(true)
        }
    }
    
    return (
        <>
            {
                subscribeModal && <SubscribeModal setSubscribeModal={ setSubscribeModal } />        
            }
            <section className="page-section">
                <div className="container">
                    <div className="bg-orange bg-orange rounded-3 p-4 p-sm-5">
                        <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                            <div className="mb-4 mb-xl-0">
                                <div className="fs-1 fw-bold text-white">Join the club.</div>
                                <div className="text-white-50">Sign up for our newsletter for the latest updates.</div>
                            </div>
                            <form className="ms-xl-4" method="POST" onSubmit={ handleSubscribeForm }>
                                <div className="input-group mb-2">
                                    <input className={ `form-control text-secondary ${ validations.email && 'is-invalid' }` } type="text" name="email" />
                                    <button type="submit" className={ `btn btn-ripple text-white border-white ${ validations.email && 'is-invalid' }` }>Sign up</button>
                                </div>
                                <div className="small text-white">
                                {
                                    validations.email ? validations.email :
                                    'We care about privacy, and will never share your data.'
                                }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SubscribeSection