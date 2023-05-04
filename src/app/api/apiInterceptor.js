import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const buildHeader = (headerParams) => {
  var header = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    // 'Cache-Control': 'no-cache'
  };
  Object.assign(header, headerParams);
  return header;
};

export const request = async (onResponse, data, type, featureURL, isFormData) => {
  // let state = store.getState();
  //retrive user data
  // const userData = await _retrieveToken();
  // const token = JSON.parse(userData).token;
  const token = null;
  // console.log(token)
  let secureRequest;
  if (onResponse.withoutToken || !token) {
    console.log('no token');
    secureRequest = buildHeader({});
  } else {
    secureRequest = buildHeader({ 'x-access-token': token });
  }
  if (isFormData) secureRequest = { ...secureRequest, 'Content-Type': 'multipart/form-data' };
  //complete?
  // if (onResponse.withoutToken) {
  //     api_call_fetch(onResponse, data, type, featureURL)
  // }
  if (onResponse.complete) onResponse.complete();
  api_call(onResponse, data, type, featureURL, secureRequest);
};

export const api_call = (
  onResponse,
  data,
  type,
  featureURL,
  secureRequest,
  currentApiData = {}
) => {
  var call_api;
  if (type === 'GET') {
    call_api = axios.request({
      url: featureURL,
      method: type,
      headers: secureRequest
    });
  } else if (type === 'PATCH') {
    call_api = axios.patch(featureURL, data, { headers: secureRequest });
  } else if (type === 'POST') {
    call_api = axios.post(featureURL, data, { headers: secureRequest });
  } else {
    call_api = axios({
      url: featureURL,
      method: type,
      data: data,
      headers: secureRequest
    });
  }
  call_api
    .then((response) => {
      if (response.status !== 200 && response.status !== 201) {
        onResponse.error(response);
      } else {
        onResponse.success(response.data);
        // NavigationService.navigate('WebViewStudy')
      }
    })
    .catch((error) => {
      console.log('Error Response', error);
      if (error.response && error.response.data) {
        let errorResponse = error.response.data;
        if (errorResponse.status === 400) {
          console.log('has 400');
          if (errorResponse.details && errorResponse.details[0]) {
            alert(errorResponse.details[0]);
          } else {
            alert(errorResponse.message);
          }
        }
      }
      if (error.response && error.response.status === 403) {
        // store.dispatch({
        //     type: LOGOUT_REQUEST,
        // });
        // if (!isLogginOut) {
        //     isLogginOut = true;
        //     // alert("Token Expired!!");
        //     setTimeout(() => isLogginOut = false, 1000)
        // }

        console.log('token expired in api module');
        // NavigationService.navigate('RefreshToken')
      }
      onResponse.error(error);
    });
};
