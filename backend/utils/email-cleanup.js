const { stripHtml } = require('string-strip-html');

exports.removeHtml = async(emailBody) => stripHtml(emailBody)