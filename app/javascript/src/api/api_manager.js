import { authCookieHandler } from '../tools';

const { getAuthCookie } = authCookieHandler;

const root = '/api/v1/';

async function request(resource, { method = 'get', authRequired = false, body = null } = {}) {
  const url = `${root}${resource}`;
  
  const authorizaton = authRequired? 
    { Authorization: `Bearer ${getAuthCookie().token}` }
  : {}

  body = body ?
  { body: JSON.stringify(body) }
  : {}

  const response = await fetch(url, {
    method,
    headers : {
      ...authorizaton,
      'Content-Type': 'application/json',
    },
    ...body,
  })

  return response.json();
}

async function get(resource) {
  return await request(resource)
}

async function post(resource, authRequired = true, body = null) {
  return await request(resource, { 
    method: 'post',
    authRequired,
    body
  })
}