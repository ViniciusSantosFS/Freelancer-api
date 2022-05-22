const { SECRET } = require('./env')

exports.SECRET = SECRET
exports.validateEmailOptions = { expiresIn: '2h' }
