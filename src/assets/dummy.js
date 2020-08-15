const db = {
    'products': [
        { id: '1', product: 'Monitor' },
        { id: '2', product: 'Keyboard' },
        { id: '3', product: 'Mouse' },
        { id: '4', product: 'HardDisk' },
        { id: '5', product: 'Memory' },
    ],
};

function list(tabla) {
    return db[tabla] || [];
}

function get(tabla, id) {
    let col = list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

function upsert(tabla, data) {
    if (!db[tabla]) {
        db[tabla] = [];
    }

    db[tabla].push(data);

    console.log(db);
}

function remove(tabla, id) {
    return true;
}

function query(tabla, q) {
    let col = list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];

    return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
};

