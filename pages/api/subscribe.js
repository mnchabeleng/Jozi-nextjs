const validate = require('../../helpers/Validate')

export default (req, res) => {
    let validation = false
    const validations = { email: null }
    const { email } = req.body
    let response = {}

    validations.email = validate.email(email, {
        required: 'Email is required.', 
        invalid: `"${ email }" is not a valid email address.`
    })

    if(validations.email){
        response = {
            status: false,
            validation: true,
            message: validations
        }
    }else{
        response = {
            status: true,
            validation: false,
            message: 'Welcome to the club.'
        }
    }
    
    res.status(200).json(response)
}