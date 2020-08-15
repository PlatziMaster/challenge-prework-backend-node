const store = require('./dummy')

const TABLA = 'products'

function list() {
    return store.list(TABLA);
}

module.exports = {
    list,
};