import type { Information } from "~/types/Information"
import { useBaseApi } from "./useBaseApi"

export const useInformationApi = () => {
    const crud = useBaseApi<Information>('information')
    return {
        ...crud
    }
}

