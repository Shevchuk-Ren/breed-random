export const SERVER_API_PROD = process.env.REACT_APP_SERVER_API_PROD;
export const SERVER_API_DEV = process.env.REACT_APP_SERVER_API_DEV;

const localhost = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const api: string | undefined = localhost ? SERVER_API_DEV : SERVER_API_PROD;


export const API_URLS = {
  randomDog: api + 'breeds/image/random',
  dogsList: api + 'breed/',
};