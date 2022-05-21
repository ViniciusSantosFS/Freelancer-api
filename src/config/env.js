const env = require('env-var')

exports.EMAIL_SERVICE = env.get('EMAIL_SERVICE').required().asString()
exports.EMAIL = env.get('EMAIL').required().asString()
exports.GENERATED_GOOGLE_PASSWORD = env
  .get('GENERATED_GOOGLE_PASSWORD')
  .required()
  .asString()
exports.TRANSPORTER_NICKNAME = env.get('TRANSPORTER_NICKNAME').asString()
