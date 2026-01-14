import { useApiClient } from "./useClientApi";

export const useBaseApi = <T>(resource: string) => {
    const api = useApiClient();
    return {
        getList() {
            return api<{data: T[]}>(`/${resource}/`);
        },
        getById(id: number | string) {
            return api<T>(`/${resource}/${id}`)
        },
        create(payload: Partial<T>) {
            return api<T>(`/${resource}`, {
                method: 'POST',
                body: payload
            })
        },
        update(id: number | string, payload: Partial<T>) {
            return api<T>(`/${resource}/${id}`, {
                method: 'PUT',
                body: payload
            })
        },
        remove(id: number | string) {
            return api<void>(`/${resource}/${id}`, {
                method: 'DELETE'
            })
        }
    }
}
