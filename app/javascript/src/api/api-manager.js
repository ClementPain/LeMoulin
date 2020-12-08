import { authCookieHandler } from '../tools';

const { setAuthCookie, getAuthCookie } = authCookieHandler;

const root = '/api/v1/';

async function request(endpoint, { method = 'get', authRequired = true, body = null } = {}) {
  const url = `${root}${endpoint}`;
  
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

  return response;
}

export async function find(endpoint, { authRequired = false } = {}) {
  const response = await request(endpoint, {
    authRequired,
  })

  return response.json();
}

export async function create(endpoint, { authRequired = true, body } = {}) {
  const response = await request(endpoint, { 
    method: 'post',
    authRequired,
    body,
  })

  return response.json();
}

export async function update(endpoint, { body } = {}) {
  const response = await request(endpoint, {
    method: 'put',
    body,
  })

  return response.json();
}

export async function remove(endpoint) {
  return await request(endpoint, {
    method: 'delete',
  })
}

export async function auth(endpoint, { identifiers }) {
  const response = await request(endpoint, {
    method: 'post',
    authRequired: false,
    body : {
      user: identifiers
    }
  })

  const token = response.headers.get('Authorization');
  if (token)
    setAuthCookie('token', token.split('Bearer ').pop());

  return response.json();
}

export function deauth() {
  request('logout', {
    method: 'delete',
  })
}