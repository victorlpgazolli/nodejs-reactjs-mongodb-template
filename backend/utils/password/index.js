const md5 = require('md5')

const hash = (
    input = ""
) => md5(input)

const isSamePassword = ({
    hashedPass = "",
    givenPassword = ""
}) => {
    const givenPasswordHash = hash(givenPassword);
    return (hashedPass == givenPasswordHash)
}

module.exports = {
    hash,
    isSamePassword
}
