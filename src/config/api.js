function category(e) {
    return new Promise((resolve, reject) => {
        fetch('https://data.police.uk/api/crime-categories')
            .then(res => res.json())
            .then(res => {
                resolve(res)
            }).catch(e => {
                reject({ message: e.message })
            })
    })
}

function forces(e) {
    return new Promise((resolve, reject) => {
        fetch('https://data.police.uk/api/forces')
            .then(res => res.json())
            .then(res => {
                resolve(res)
            }).catch(e => {
                reject({ message: e.message })
            })
    })
}

function crimes(category, force) {
    return new Promise((resolve, reject) => {
        fetch('https://data.police.uk/api/crimes-no-location?category=' + category + '&force=' + force)
            .then(res => res.json())
            .then(res => {
                resolve(res)
            }).catch(e => {
                reject({ message: e.message })
            })
    })
}


export {
    category,
    forces,
    crimes
}