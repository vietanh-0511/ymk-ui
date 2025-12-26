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
                    <label for="email" class="block text-gray-700 mb-2">Email</label>
                    <input v-model="bookingData.email" type="email" id="email" class="w-full px-3 py-2 border rounded" required />
                </div>
                <div class="mb-4">
                    <label for="date" class="block text-gray-700 mb-2">Ngày Đặt</label>
                    <input v-model="bookingData.date" type="date" id="date" class="w-full px-3 py-2 border rounded" required />
                </div>
                <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Xác Nhận Đặt Chỗ</button>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps<{
        isVisible: boolean
    }>();
    const emits = defineEmits<{
        (e: 'close'): void;
    }>();
    const bookingData = ref({
        name: '',
        email: '',
        date: ''
    });
    const closeModal = () => {
        emits('close');
    };
    const submitBooking = () => {
        // Xử lý dữ liệu đặt chỗ ở đây (gửi đến server hoặc lưu trữ)
        console.log('Booking Data:', bookingData.value);
        // Đóng modal sau khi gửi
        closeModal();
    };
</script>