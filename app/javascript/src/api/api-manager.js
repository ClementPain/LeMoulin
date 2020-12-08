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
  const firstRequest = await request(endpoint, {
    authRequired,
  })

  const result = await firstRequest.json();

  const { errors, error } = result;

  if (errors)
    onErrors(errors);
  else if (error)
    onError(error);
  else
    onSuccess(result);

  return result.json();
}

export async function create(endpoint, { authRequired = true, body } = {}) {
  const firstRequest = await request(endpoint, { 
    method: 'post',
    authRequired,
    body,
  })

  const result = await firstRequest.json();

  const { errors, error } = result;

  if (errors)
    onErrors(errors);
  else if (error)
    onError(error);
  else
    onSuccess(result);

  return result.json();
}

export async function update(endpoint, { body } = {}) {
  const firstRequest = await request(endpoint, {
    method: 'put',
    body,
  })

  const result = await firstRequest.json();

  const { errors, error } = result;

  if (errors)
    onErrors(errors);
  else if (error)
    onError(error);
  else
    onSuccess(result);

  return result.json();
}

export async function remove(endpoint) {
  return await request(endpoint, {
    method: 'delete',
  })
}

export async function auth(endpoint, { identifiers }, onErrors, onError, onSuccess) {
  const firstRequest = await request(endpoint, {
    method: 'post',
    authRequired: false,
    body : {
      user: identifiers
    }
  })

  const token = firstRequest.headers.get('Authorization');
  if (token)
    setAuthCookie('token', token.split('Bearer ').pop());

  const result = await firstRequest.json();

  const { errors, error } = result;

  if (errors)
    onErrors(errors);
  else if (error)
    onError(error);
  else
    onSuccess(result);

  return result;
}

export function deauth() {
  remove('logout')
}