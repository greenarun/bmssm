import qs from "querystringify";
import { saveAs } from "file-saver";
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://localhost:8081";
const CONTEXT_PATH = '';
const BASIC_KEY = '';

const MAP_URL = "https://api.mapbox.com/geocoding/v5";
const MAP_TOKEN = 'pk.eyJ1IjoiZ3JlZW5hcnVuIiwiYSI6ImNrYWpoM2ZoZzBhbTkyemp1ajIwYzBtZnoifQ.PmvQ16O-4t0c2OQl0Qjqvg';

const defaultRequestHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const createURLParams = params => {
  let convertedParams = "";
  // Add params to URL if there are any
  if (params) {
    Object.keys(params).forEach((key, index) => {
      convertedParams += `${index === 0 ? "?" : "&"}${key}=${params[key]}`;
    });
  }
  return convertedParams;
};

const handleResponseStatus = async response => {
  if (response && (response.status < 200 || response.status >= 300)) {
    const error = new Error(response.statusText);
    error.response = await response.json();
    error.code = response.status;
    throw error;
  }
  return response.json();
};

export const buildAuthorizationHeader = () => {
  const token = sessionStorage.getItem("id_token");

  if (!token) {
    throw new Error("Session not available");
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const GET = async (endpoint, params, headers) => {
  // Create the request URL
  const url = `${BASE_URL}/${CONTEXT_PATH}/${endpoint}${createURLParams(
    params,
  )}`;
  const options = {
    headers: {
      ...defaultRequestHeaders,
      ...headers,
      ...buildAuthorizationHeader(),
    },
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};

export const POST = async (endpoint, body, params, headers) => {
  // Create the request URL
  // const url = `${BASE_URL}/${CONTEXT_PATH}/${endpoint}${createURLParams(
  const url = `${BASE_URL}/${endpoint}${createURLParams(
    params,
  )}`;
  const options = {
    method: "POST",
    headers: {
      ...defaultRequestHeaders,
      ...headers,
      // ...buildAuthorizationHeader(),
    },
    body: JSON.stringify(body || {}),
  };
  const response = await fetch(url, options);

  return handleResponseStatus(response);
};

export const PUT = async (endpoint, body, params, headers) => {
  // Create the request URL
  const url = `${BASE_URL}/${CONTEXT_PATH}/${endpoint}${createURLParams(
    params,
  )}`;
  const options = {
    method: "PUT",
    headers: {
      ...defaultRequestHeaders,
      ...headers,
      ...buildAuthorizationHeader(),
    },
    body: JSON.stringify(body || {}),
  };
  const response = await fetch(url, options);

  return handleResponseStatus(response);
};

export const DELETE = async (endpoint, body, params, headers) => {
  // Create the request URL
  const url = `${BASE_URL}/${CONTEXT_PATH}/${endpoint}${createURLParams(
    params,
  )}`;
  const options = {
    method: "DELETE",
    headers: {
      ...defaultRequestHeaders,
      ...headers,
      ...buildAuthorizationHeader(),
    },
    body: JSON.stringify(body || {}),
  };
  const response = await fetch(url, options);

  return handleResponseStatus(response);
};

export const PATCH = async (endpoint, body, params, headers) => {
  // Create the request URL
  const url = `${BASE_URL}/${CONTEXT_PATH}/${endpoint}${createURLParams(
    params,
  )}`;
  const options = {
    method: "PATCH",
    headers: {
      ...defaultRequestHeaders,
      ...headers,
      ...buildAuthorizationHeader(),
    },
    body: JSON.stringify(body || {}),
  };
  const response = await fetch(url, options);
  return handleResponseStatus(response);
};

export const handleLogin = async (username, password) => {
  const body = {
    username,
    password,
    grant_type: "password",
  };

  let formData = qs.stringify(body);
  const url = `${BASE_URL}/${CONTEXT_PATH}/oauth/token`;
  const options = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Basic ${BASIC_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return fetch(url, options).then(result => {
    return result.json();
  });
};

export const DOWNLOADFILE = async (link, fileName) => {
  const url = `${BASE_URL}/${CONTEXT_PATH}/${link}`;
  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...buildAuthorizationHeader(),
    },
  };
  fetch(url, options)
    .then(response => {
      return response.blob();
    })
    .then(blob => {
      saveAs(blob, `${fileName}.xlsx`);
    });
};

export const DOWNLOADCSVFILE = async (link, fileName) => {
  const url = `${BASE_URL}/${CONTEXT_PATH}/${link}`;
  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...buildAuthorizationHeader(),
    },
  };
  fetch(url, options)
    .then(response => {
      return response.blob();
    })
    .then(blob => {
      saveAs(blob, `${fileName}.csv`);
    });
};

export const DOWNLOAD_REPORT = async (
  link,
  params,
  body,
  fileName,
  method = "POST",
) => {
  const url = `${BASE_URL}/${CONTEXT_PATH}/${link}${createURLParams(params)}`;
  const options = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...buildAuthorizationHeader(),
    },
    method: method,
    body: JSON.stringify(body),
  };
  fetch(url, options)
    .then(response => {
      return response.blob();
    })
    .then(blob => {
      saveAs(blob, `${fileName}.xlsx`);
    });
};

export const UPLOADFILE = async (endpoint, body, params, headers) => {
  const url = `${BASE_URL}/${CONTEXT_PATH}/${endpoint}${createURLParams(
    params,
  )}?access_token=${MAP_TOKEN}`;

  var formData = new FormData();
  for (var name in body) {
    formData.append(name, body[name]);
  }

  const options = {
    method: "POST",
    headers: {
      ...headers,
      ...buildAuthorizationHeader(),
    },
    body: formData,
  };

  const response = await fetch(url, options);

  return handleResponseStatus(response);
};

export const GETMAP = async (endpoint, params, headers) => {
  // Create the request URL
  const url = `${MAP_URL}/${endpoint}${createURLParams(params)}?access_token=${MAP_TOKEN}`

  const options = {
    headers: {
      ...defaultRequestHeaders,
      ...headers,
      // ...buildAuthorizationHeader(),
    },
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};
