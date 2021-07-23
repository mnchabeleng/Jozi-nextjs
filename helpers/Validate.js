'use strict'

const regex = {
    email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

module.exports.email = (email, messages) => {
    const reg = regex.email
    
    if (!email || email == '')
        return messages.required
    else if (!reg.test(email))
        return messages.invalid

    return null
}