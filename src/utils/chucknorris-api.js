import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export {getFoodData, getCelebrityData};

function getFoodData() {
  const url = `${BASE_URL}/api/v1/jokes/food`;
  return axios.get(url).then(response => response.data);
}

function getCelebrityData() {
  const url = `${BASE_URL}/api/v1/signin/protected`;
  const token = localStorage.getItem('jwtToken');
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  }).then(response => {
    return response
  })
    .catch(err => {
      console.log(err)
      return err;
    });
}