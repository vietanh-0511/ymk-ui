import { defineStore } from "pinia";

export const useInformationStore = defineStore("information", () => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.apiBaseUrl;
  async function getInfo() {
    const res = await $fetch(`${apiUrl}/informations/`);
    const data = await res;
    return data;
  }
  return {
    getInfo
  };
});
