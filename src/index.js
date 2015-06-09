var crypto = require('crypto');

module.exports = function (publicKey) {
    return crypto.createHash('sha256').update(new Buffer(publicKey, 'base64')).digest("hex")
        .slice(0, 32)
        .split('')
        .map(function (c) {
            return c >= 'a' ? String.fromCharCode(c.charCodeAt() + 10) :
                String.fromCharCode('a'.charCodeAt() + c.charCodeAt() - '0'.charCodeAt());
        })
        .join('');
};
