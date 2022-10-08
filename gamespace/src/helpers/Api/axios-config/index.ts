import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";

const apiUrl = "https://gamestock-api.herokuapp.com";

const Api = axios.create({
    baseURL: apiUrl
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);

export default Api