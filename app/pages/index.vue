<template>
  <!-- Hotline Buttons -->
  <div class="hotline-area" id="hotlinePopup">
    <a href="tel:0981063636" class="hotline-number gradient-button">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
      </svg>
      <span>Lễ Tân - 0981 06 36 36</span>
    </a>
    <a href="tel:0987631212" class="hotline-number gradient-button">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
      </svg>
      <span>Quản Lý - 0987 63 12 12</span>
    </a>
  </div>

  <!-- Hero Section with Background Video -->
  <section id="home" class="relative h-screen overflow-hidden max-sm:min-h-[700px]">
    <img class="video-bg lg:hidden" />
    <img class="video-bg max-lg:hidden" src="/assets/img/NKO_1095.webp" />
    <div class="bg-black/75 h-full flex flex-col justify-center items-center text-center px-4 relative z-0">
      <!-- Zalo QR -->
      <div class="absolute h-[150px] max-sm:h-[100px] w-[150px] max-sm:w-[100px] top-[120px] right-[20px]">
        <img src="/assets/img/zalo_qr.jpg" alt="Zalo" />
      </div>

      <div class="relative w-[320px] h-[215px] rounded-lg overflow-hidden shadow-lg">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/assets/img/black_bg_logo.png')">
        </div>
        <!-- Overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-end p-2">
          <!-- Content -->
          <button @click="openBookingModal"
            class="text-black font-semibold py-3 px-6 rounded-lg transition duration-300 py-2 px-6 my-2 gradient-button">Đặt
            Phòng Ngay</button>
        </div>
      </div>

      <!-- Info Box -->
      <div class="info-box">
        <div class="flex gap-2">
          <img src="/assets/icon/facebook.svg" style="width: 20px;" alt="Facebook" />
          <a class="no-underline" href="https://www.facebook.com/KaraokeYaM">Karaoke Y&M</a>
        </div>
        <div class="flex gap-2">
          <img src="/assets/icon/youtube.svg" style="width: 20px;" alt="YouTube" />
          <a class="no-underline" href="https://www.youtube.com/@karaokeym">Karaoke Y&M</a>
        </div>
        <div class="flex gap-2">
          <img src="/assets/icon/tik-tok.svg" style="width: 20px;" alt="TikTok" />
          <a class="no-underline" href="https://www.tiktok.com/@karaokey_m">Karaoke Y&M</a>
        </div>
        <div class="flex flex-col text-left">
          <img src="/assets/icon/map-marker.svg" style="width: 20px;" alt="Map" />
          <a class="no-underline" href="https://maps.app.goo.gl/T9paMgoySo8FuQXJ6">- 36A Nguyễn Hữu Thọ, Hoàng Mai, Hà
            Nội</a>
          <a class="no-underline" href="https://maps.app.goo.gl/Dki4E5amjAUqaJ8y6">- 105 phố Đại Từ, Định Công, Hà
            Nội</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section with Background Image -->
  <section id="features" class="bg-cover bg-center relative 2xl:aspect-[16/6] xl:aspect-[16/8] lg:aspect-[16/10]"
    style="background-image: url('/assets/img/NKO_1004.webp')">
    <div class="bg-black/60 py-16 h-full">
      <div class="max-w-6xl mx-auto text-white bg-black/50 rounded-md p-7">
        <h2 class="text-3xl text-white md:text-4xl font-bold text-center mb-12">
          Y&M Karaoke
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="item in features" :key="item.id" class="text-center">
            <img :src="item.image" alt="Room 1" class="mx-auto mb-4 rounded-lg" />
            <h3 class="text-xl font-semibold mb-2">
              {{ item.title }}
            </h3>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section with Background Image -->
  <section id="pricing" class="bg-cover bg-center relative 2xl:aspect-[16/6] xl:aspect-[16/8] lg:aspect-[16/10]"
    style="background-image: url('/assets/img/NKO_0994.webp')">
    <div class="bg-black/60 py-16 px-5 h-full">
      <div class="max-w-6xl mx-auto text-white bg-black/50 rounded-md p-7">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Chương trình khuyến mãi
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-lg:gap-4 text-black">
          <div v-for="item in promotions" :key="item.title" class="p-6 rounded-lg text-center background-gradient">
            <p class="text-2xl font-bold mb-4">{{ item.title }}</p>
            <p v-html="item.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Google Maps Section -->
  <section id="location" class="bg-cover bg-center" style="background-image: url('/assets/img/NKO_1090.webp')">
    <div class="bg-black/60 py-16 px-5 h-full">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Bản đồ
        </h2>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.7663022368383!2d105.83690329999999!3d20.9712771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad6727a0875d%3A0xf9d9a35cc94ee7bd!2sKARAOKE%20Y%26M!5e0!3m2!1svi!2s!4v1762953231428!5m2!1svi!2s"
            width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>
  <!-- Booking Modal -->
  <BookingModal :isVisible="isBookingModalVisible" :roomList="rooms" @close="isBookingModalVisible = false" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useInformationApi } from '../composables/api/useInformationApi';
import type { Information } from '../types/Information';
import { useRoomApi } from '~/composables/api/useRoomApi';
import type { Room } from '~/types/Room';

const isBookingModalVisible = ref(false);
const features = ref();
const promotions = ref();
const openBookingModal = () => {
  isBookingModalVisible.value = true;
};
const informations = ref<Information[]>();
const rooms = ref<Room[]>();

const {getList: getInformationList} = useInformationApi();
const {getList: getRoomList} = useRoomApi();
const fetchData = async () => {
   const infomationList = await getInformationList();
   const roomList = await getRoomList();
   console.log('roomList', roomList);
   console.log('infomationList', infomationList);
   rooms.value = roomList?.data ? roomList.data : [];
   informations.value = infomationList?.data ? infomationList.data : [];
   features.value = informations.value.filter(item => item.type === 1);
   promotions.value = informations.value.filter(item => item.type === 2);
};

onMounted(() => {
  fetchData();
});

</script>