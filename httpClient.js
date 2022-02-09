import { TIMEOUT_SEC } from './config.js';

export const GET = async function (url) {
  try {
    const fetchPromise = fetch(url);
    const result = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    const data = await result.json();

    if (!result.ok) throw new Error(`${data.message} (${result.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const POST = async function (url, postData) {
  try {
    const fetchPromise = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const result = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);
    const data = await result.json();

    if (!result.ok) throw new Error(`${data.message} (${result.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
  