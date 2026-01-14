export const useApiClient = () => {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiBaseUrl;
    return $fetch.create({
        baseURL: apiUrl,
        headers: {"Content-Type": "application/json"},
        onRequestError({ request, options, error }) {
            console.error('Request error:', error);
        }
    });
}
