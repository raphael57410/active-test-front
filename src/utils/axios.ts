import axios from "axios";


export const httpClient = axios.create({
    baseURL: "http://localhost:3001/api/number",
    timeout: 1000,
});

export const fetchUtils = {
    get: <T>(url: string, bearerToken?: string) =>
        httpClient.get<T>(url, {
            headers: {
                Authorization: `Bearer ${bearerToken ? bearerToken : ""}`,
            },
        }),
    post: <T>(url: string, data?: any, bearerToken?: string) =>
        httpClient.post<T>(url, data, /*{
            headers: {
                Authorization: `Bearer ${bearerToken ? bearerToken : ""}`,
            },
        }*/),
    patch: <T>(url: string, data?: any, bearerToken?: string) =>
        httpClient.patch<T>(url, data, {
            headers: {
                Authorization: `Bearer ${bearerToken ? bearerToken : ""}`,
            },
        }),
    delete: <T>(url: string, bearerToken?: string) =>
        httpClient.delete<T>(url, {
            headers: {
                Authorization: `Bearer ${bearerToken ? bearerToken : ""}`,
            },
        }),
};
export const fetcher = fetchUtils.get;
