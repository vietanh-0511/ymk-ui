import type { Booking } from "~/types/Booking"
import { useBaseApi } from "./useBaseApi"

export const useBookingApi = () => {
    const crud = useBaseApi<Booking>('booking')
    return {
        ...crud
    }
}

