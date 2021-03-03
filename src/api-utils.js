import request from 'superagent';

const URL = 'https://desolate-chamber-07642.herokuapp.com';

export async function userLogin(email, password){
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({email, password})

    return response.body;
}

export async function userSignup(email, password){
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({email, password})

    return response.body;
}

export async function getTodos(token){
    const response = await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)

    return response.body;
}

export async function addTodo(todo, token){
    const response = await request
        .post(`${URL}/api/todos`)
        .set('Authorization', token)
        .send({todo})

    return response.body;
}

export async function deleteTodo(id, token){
    const response = await request
        .delete(`${URL}/api/todos/${id}`)
        .set('Authorization', token)
        .send({id})

    return response.body;
}