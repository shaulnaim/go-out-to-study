'use strict'

exports.handler = function (event, context, callback) {
    const {name} = JSON.parse(event.body);
    if (name === 'shaul') {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                msg: `Hello ${name}`
            })
        })
    } else {
        callback(new Error(`you are not shaul !!!`))
    }
    // Lambda Code Here
    // context.succeed('Success!')
    // context.fail('Failed!')
}