import axios from "axios";

const ApiService = {
  setBaseUrl ( baseURL ) {
    axios.defaults.baseURL = baseURL;
  },

  getBaseUrl () {
    return axios.defaults.baseURL;
  },

  getDefaults () {
    return axios.defaults;
  },

  setCommonHeader ( key, value ) {
    axios.defaults.headers.common[
      key
      ] = value;
  },

  getHeaders () {
    return axios.defaults.headers;
  },

  removeCommonHeader (key) {
    axios.defaults.headers.common[key] = null;
  },

  get ( resource, options = {} ) {
    return axios.get( resource, options );
  },

  post ( resource, data, options = {} ) {
    return axios.post( resource, data, options );
  },

  put ( resource, data, options = {} ) {
    return axios.put( resource, data, options );
  },

  delete ( resource, options ) {
    return axios.delete( resource, options );
  },
  /**
   * @description Perform a custom Axios request.
   * @param config {object} Object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   */
  customRequest ( config ) {
    return axios( config );
  }
};

export default ApiService;
