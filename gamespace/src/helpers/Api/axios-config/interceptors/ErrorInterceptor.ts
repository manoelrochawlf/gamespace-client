import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {

    if(error.message === 'Network Error') {
        return Promise.reject(new Error('Conection Error'));
    };
    if(error.response?.status === 401) {
       // Pode ser feito algo interessante
    };
    
    return Promise.reject(error);
}