import { TIMEOUT_MS } from './config.js';
import axios from 'axios';

export const GET = async (url) => {
  const response = await axios({ method: 'get', url: url, timeout: TIMEOUT_MS }).catch((error) => {
    throw new Error(error);
  });
  return response;
};

export const POST = async (url, postData) => {
  const response = await axios({ method: 'post', url: url, data: postData, timeout: TIMEOUT_MS }).catch((error) => {
    throw new Error(error);
  });
  return response;
};

export const PUT = async (url, putData) => {
  const response = await axios({ method: 'put', url: url, data: putData, timeout: TIMEOUT_MS }).catch((error) => {
    throw new Error(error);
  });
  return response;
};

export const DELETE = async (url) => {
  const response = await axios({ method: 'delete', url: url, timeout: TIMEOUT_MS }).catch((error) => {
    throw new Error(error);
  });
  return response;
};