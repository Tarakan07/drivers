import axios from "axios";

const REQUEST_TIMEOUT = 50000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const onUnauthorized = (res) => {
  return res;
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      origin: "/",
    },
  });

  const onSuccess = (response) => response;
  const onFail = ({ response }) => {
    // store.dispatch(setError(pick(response, ["data", "statusText", "status"])));
    if (response?.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw response;
  };

  api.interceptors.response.use(onSuccess, onFail);

  const requestHandler = (request) => {
    // (request.headers["Authorization"] = "19cedeae-9496-4a25-af06-5a2af2b15567"),
    //   (request.headers["Fingerprint"] = "admin fingerprint");
    return request;
  };
  api.interceptors.request.use((request) => requestHandler(request));

  return api;
};

export const API = createAPI(onUnauthorized);
