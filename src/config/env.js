const env = require('env-var')

exports.PORT = env.get('PORT').required().asPortNumber()
exports.NODE_ENV = env.get('NODE_ENV').required().asString()
exports.DATABASE_URL = env.get('DATABASE_URL').required().asString()
exports.EMAIL_SERVICE = env.get('EMAIL_SERVICE').required().asString()
exports.EMAIL = env.get('EMAIL').required().asString()
exports.GENERATED_GOOGLE_PASSWORD = env
  .get('GENERATED_GOOGLE_PASSWORD')
  .required()
  .asString()
exports.TRANSPORTER_NICKNAME = env.get('TRANSPORTER_NICKNAME').asString()
exports.SECRET = env.get('SECRET').required().asString()
