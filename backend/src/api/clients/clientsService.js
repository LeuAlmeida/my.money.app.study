const Clients = require('./clients')
const errorHandler = require('../common/errorHandler')

Clients.methods(['get', 'post', 'put', 'delete'])
Clients.updateOptions({new: true, runValidators: true})
Clients.after('post', errorHandler).after('put', errorHandler)

Clients.route('count', (req, res, next) => {
    Clients.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Clients