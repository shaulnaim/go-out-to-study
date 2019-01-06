Skip to content
Why GitHub ?
    Business
Explore
Marketplace
Pricing

Search

Sign in
    Sign up
18
35 6 netlify / netlify - faunadb - example
Code Issues 1 Pull requests 0 Projects 0 Wiki Insights
netlify - faunadb - example / src / utils / api.js
cede663 on Jun 30, 2018
@DavidWells DavidWells add localHost util

53 lines(46 sloc) 1.08 KB
/* Api methods to call /functions */

const create = (data) => {
    return fetch('/.netlify/functions/todos-create', {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

const readAll = () => {
    return fetch('/.netlify/functions/todos-read-all').then((response) => {
        return response.json()
    })
}

const test = () => {
    return fetch('/.netlify/functions/test').then((response) => {
        return response.json()
    })
}

const update = (todoId, data) => {
    return fetch(`/.netlify/functions/todos-update/${todoId}`, {
        body: JSON.stringify(data),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

const deleteTodo = (todoId) => {
    return fetch(`/.netlify/functions/todos-delete/${todoId}`, {
        method: 'POST',
    }).then(response => {
        return response.json()
    })
}

const batchDeleteTodo = (todoIds) => {
    return fetch(`/.netlify/functions/todos-delete-batch`, {
        body: JSON.stringify({
            ids: todoIds
        }),
        method: 'POST'
    }).then(response => {
        return response.json()
    })
}

export default {
    create: create,
    readAll: readAll,
    update: update,
    delete: deleteTodo,
    batchDelete: batchDeleteTodo
}