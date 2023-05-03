const generateMesssage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocationMesssage = (username, url) => {
    return {
        username,
        url, 
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMesssage,
    generateLocationMesssage
}