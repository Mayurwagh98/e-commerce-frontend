import axios from "axios";

const makeApiRequest = async (
  method: string,
  endpoint: string,
  data: unknown,
  config: any = {},
  baseUrl: string
) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: token,
    };
  }

  const api = axios.create({
    baseURL: baseUrl,
  });

  switch (method.toLowerCase()) {
    case "get":
      return api.get(endpoint, config);
    case "post":
      return api.post(endpoint, data, config);
    case "put":
      return api.put(endpoint, data, config);
    case "delete":
      return api.delete(endpoint, config);
    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};

export default makeApiRequest;
