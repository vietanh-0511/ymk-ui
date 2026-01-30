<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
            <button @click="closeModal" class="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <h2 class="text-2xl font-semibold mb-4">Đặt Chỗ Ngay</h2>
            <form @submit.prevent="submitBooking">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 mb-2">Họ và Tên</label>
                    <input v-model="bookingData.name" type="text" id="name" class="w-full px-3 py-2 border rounded" required />
                </div>
                <div class="mb-4">
                    <label for="phone" class="block text-gray-700 mb-2">Số Điện Thoại</label>
                    <input v-model="bookingData.phone" type="text" id="phone" class="w-full px-3 py-2 border rounded" required />
                </div>
                <div class="mb-4">
                    <label for="roomType" class="block text-gray-700 mb-2">Loại phòng</label>
                    <select v-model="bookingData.roomType" id="roomType" class="w-full px-3 py-2 border rounded" required @change="bookingData.room = ''">
                        <option value="">Chọn loại phòng</option>
                        <option value="1">VIP</option>
                        <option value="2">Thường</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="room" class="block text-gray-700 mb-2">Phòng hát</label>
                    <select v-model="bookingData.room" id="room" class="w-full px-3 py-2 border rounded" :disabled="!bookingData.roomType || isOutOfTime" required>
                        <option value="">Chọn phòng hát</option>
                        <option v-for="room in availableRooms" :key="room.id" :value="room.id">{{ room.name }}</option>
                    </select>
                    <div v-if="isOutOfTime" class="text-sm text-red-500 mt-1">Hết phòng</div>
                </div>
                <div class="mb-4">
                    <label for="date" class="block text-gray-700 mb-2">Thời gian</label>
                    <input v-model="bookingData.date" type="date" id="date" class="w-full px-3 py-2 border rounded" required />
                    <input v-model="bookingData.time" type="time" id="time" class="w-full px-3 py-2 border rounded" required />
                </div>
                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Xác Nhận Đặt Chỗ</button>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import { useBookingApi } from '../composables/api/useBookingApi';
import type { Room } from '../types/Room';

    const allRooms: Room[] = [
        { id: 'vip-1', name: 'VIP 1', type: '1' },
        { id: 'vip-2', name: 'VIP 2', type: '1' },
        { id: 'vip-3', name: 'VIP 3', type: '1' },
        { id: 'vip-4', name: 'VIP 4', type: '1' },
        { id: 'vip-5', name: 'VIP 5', type: '1' },
        { id: 'thuong-1', name: 'Phòng 1', type: '2' },
        { id: 'thuong-2', name: 'Phòng 2', type: '2' },
        { id: 'thuong-3', name: 'Phòng 3', type: '2' },
        { id: 'thuong-4', name: 'Phòng 4', type: '2' },
        { id: 'thuong-5', name: 'Phòng 5', type: '2' },
        { id: 'thuong-6', name: 'Phòng 6', type: '2' },
        { id: 'thuong-7', name: 'Phòng 7', type: '2' },
        { id: 'thuong-8', name: 'Phòng 8', type: '2' },
    ];

    const bookingData = ref({
        name: '',
        phone: '',
        roomType: '',
        room: '',
        date: '',
        time: ''
    });

    const isOutOfTime = ref(false);

    watchEffect(() => {
        if (bookingData.value.time) {
            const [hoursStr] = bookingData.value.time.split(':');
            const hours = hoursStr ? Number(hoursStr) : 0;
            isOutOfTime.value = hours >= 12;
        } else {
            isOutOfTime.value = false;
        }
    });

    const availableRooms = computed(() => {
        if (!bookingData.value.roomType) {
            return [];
        }
        return allRooms.filter(room => room.type === bookingData.value.roomType);
    });

    const props = defineProps<{
        isVisible: boolean
    }>();
    const emits = defineEmits<{
        (e: 'close'): void;
    }>();
    const closeModal = () => {
        emits('close');
    };
    const submitBooking = () => {
        const bookingInfo = {
            name: bookingData.value.name,
            phone: bookingData.value.phone,
            room: bookingData.value.room,
            bookingTime: new Date(`${bookingData.value.date}T${bookingData.value.time}`).toISOString(),
        };
        console.log('Booking Data:', bookingInfo);
        const bookingApi = useBookingApi();
        bookingApi.create(bookingInfo);
        closeModal();
    };
</script>