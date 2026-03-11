import { useBaseApi } from "./useBaseApi"
import type { Room } from "~/types/Room"

export const useRoomApi = () => {
    const crud = useBaseApi<Room>('room')
    return {
        ...crud
    }
}

