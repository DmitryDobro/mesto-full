export const BASE_URL = 'https://auth.nomoreparties.co'

function checkResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  export function register(password, email){
    console.log(123)
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({password, email})
      })
      .then((res) =>checkResponse(res))
  }

  export function authorize(password, email){
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({password, email})
      })
      .then((res) => checkResponse(res))
  }
  export function getDataUser(token){
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json" ,
          "Authorization" : `Bearer ${token}`
        },
      })
      .then((res) => checkResponse(res))
  }