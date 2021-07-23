const validate = require('../../helpers/Validate')

export default (req, res) => {
    const validations = {}
    let response = null

    const { name, email, subject, message } = req.body
    
    validations.name = name ? null : 'Name is required.'
    validations.email = validate.email(email, {
        required: 'Email is required.', 
        invalid: `${ email } is not a valid email address.`
    })
    validations.subject = subject ? null : 'Subject is required.'
    validations.message = message ? null : 'Type a message.'

    if(validations.name || validations.email || validations.subject || validations.message){
        response = {
            status: false,
            validation: true,
            message: validations
        }
    }else{
        response = {
            status: true,
            validation: false,
            message: 'Message was sent.'
        }
    }

    res.status(200).json(response)
}