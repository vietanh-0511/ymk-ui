import { defineStore } from 'pinia'

export const useInformationStore = defineStore('information', () => {
    const config = useRuntimeConfig()
    const apiUrl = "http://127.0.0.1:8000/api"
    async function getInfo() {
        const res = await fetch(`${apiUrl}/informations/`);
        const data = await res.json()
        return data;
    }
    return {
        getInfo
    }
})