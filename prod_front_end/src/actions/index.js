export const FETCH_PRODS = 'fetch_prods';
export const CREATE_PROD = 'create_prod';
export const FETCH_PROD = 'fetch_prod';
export const DELETE_PROD = 'delete_post';

import axios from 'axios';

const ROOT_URL ='http://localhost:5000';

export function  fetchProds(){
  const request = axios.get(`${ROOT_URL}/products/`);
  return {
    type: FETCH_PRODS,
    payload: request
  };
}

export function createProd(values, callback){
  const request = axios.post(`${ROOT_URL}/products/`, values)
  .then(() => callback());

  return {
    type: CREATE_PROD,
    payload: request
  }

}

export function fetchProd(desc,datetime){
  const request = axios.get(`${ROOT_URL}/products/${desc}/${datetime}`);
  return {
    type: FETCH_PROD,
    payload: request
  }
}

// export function deleteProd(id,callback){
//   const request = axios.delete(`${ROOT_URL}/prod/${id}`)
//   .then(() => callback());
//   return {
//     type: DELETE_POST,
//     payload: id
//   }
// }

