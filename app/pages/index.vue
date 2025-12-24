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
    <div class="bg-black bg-opacity-70 h-full flex flex-col justify-center items-center text-center px-4 relative z-0">
      <!-- Zalo QR -->
      <div class="absolute h-[150px] max-sm:h-[100px] w-[150px] max-sm:w-[100px] top-[120px] right-[20px]">
        <img src="/assets/img/zalo_qr.jpg" alt="Zalo" />
      </div>

      <div class="relative w-[320px] h-[215px] rounded-lg overflow-hidden shadow-lg">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('/assets/img/black_bg_logo.png')"></div>
        <!-- Overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-end p-2">
          <!-- Content -->
          <a href="tel:0981063636"
            class="text-black font-semibold py-3 px-6 rounded-lg transition duration-300 py-2 px-6 my-2 gradient-button">Đặt
            Phòng Ngay</a>
        </div>
      </div>

      <!-- Info Box -->
      <div class="info-box">
        <div class="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
            <path fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z">
            </path>
          </svg>
          <a class="no-underline" href="https://www.facebook.com/KaraokeYaM">Karaoke Y&M</a>
        </div>
        <div class="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z">
            </path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
          <a class="no-underline" href="https://www.youtube.com/@karaokeym">Karaoke Y&M</a>
        </div>
        <div class="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#212121" fill-rule="evenodd"
              d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z"
              clip-rule="evenodd"></path>
            <path fill="#ec407a" fill-rule="evenodd"
              d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z"
              clip-rule="evenodd"></path>
            <path fill="#fff" fill-rule="evenodd"
              d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z"
              clip-rule="evenodd"></path>
            <path fill="#81d4fa" fill-rule="evenodd"
              d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z"
              clip-rule="evenodd"></path>
          </svg>
          <a class="no-underline" href="https://www.tiktok.com/@karaokey_m">Karaoke Y&M</a>
        </div>
        <div class="flex flex-col text-left">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#1c9957"
              d="M42,39V9c0-1.657-1.343-3-3-3H9C7.343,6,6,7.343,6,9v30c0,1.657,1.343,3,3,3h30C40.657,42,42,40.657,42,39z">
            </path>
            <path fill="#3e7bf1" d="M9,42h30c1.657,0-15-16-15-16S7.343,42,9,42z"></path>
            <path fill="#cbccc9" d="M42,39V9c0-1.657-16,15-16,15S42,40.657,42,39z"></path>
            <path fill="#efefef" d="M39,42c1.657,0,3-1.343,3-3v-0.245L26.245,23L23,26.245L38.755,42H39z"></path>
            <path fill="#ffd73d" d="M42,9c0-1.657-1.343-3-3-3h-0.245L6,38.755V39c0,1.657,1.343,3,3,3h0.245L42,9.245V9z">
            </path>
            <path fill="#d73f35"
              d="M36,2c-5.523,0-10,4.477-10,10c0,6.813,7.666,9.295,9.333,19.851C35.44,32.531,35.448,33,36,33s0.56-0.469,0.667-1.149C38.334,21.295,46,18.813,46,12C46,6.477,41.523,2,36,2z">
            </path>
            <path fill="#752622" d="M36 8.5A3.5 3.5 0 1 0 36 15.5A3.5 3.5 0 1 0 36 8.5Z"></path>
            <path fill="#fff"
              d="M14.493,12.531v2.101h2.994c-0.392,1.274-1.455,2.185-2.994,2.185c-1.833,0-3.318-1.485-3.318-3.318s1.486-3.318,3.318-3.318c0.824,0,1.576,0.302,2.156,0.799l1.548-1.547C17.22,8.543,15.92,8,14.493,8c-3.038,0-5.501,2.463-5.501,5.5s2.463,5.5,5.501,5.5c4.81,0,5.637-4.317,5.184-6.461L14.493,12.531z">
            </path>
          </svg>
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
    <div class="bg-black bg-opacity-60 py-16 h-full">
      <div class="max-w-6xl mx-auto bg-black bg-opacity-50 rounded-md p-7">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Y&M Karaoke
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <img src="/assets/img/NKO_0960.webp" alt="Room 1" class="mx-auto mb-4 rounded-lg" />
            <h3 class="text-xl font-semibold mb-2">
              Không gian hiện đại – Phòng hát đa phong cách
            </h3>
            <p>
              Y&M Karaoke sở hữu nhiều phòng hát với thiết kế đa dạng từ sang
              trọng, lãng mạn đến năng động, phù hợp cho mọi nhu cầu từ hội
              nhóm, gia đình đến tiệc sinh nhật.
            </p>
          </div>
          <div class="text-center">
            <img src="/assets/img/NKO_1028.webp" alt="Room 2" class="mx-auto mb-4 rounded-lg" />
            <h3 class="text-xl font-semibold mb-2">
              Âm thanh – Ánh sáng đỉnh cao
            </h3>
            <p>
              Trang bị hệ thống âm thanh chất lượng cao, ánh sáng LED điều
              chỉnh theo nhạc, Y&M Karaoke mang đến trải nghiệm giải trí sống
              động như sân khấu thực thụ.
            </p>
          </div>
          <div class="text-center">
            <img src="/assets/img/NKO_0998.webp" alt="Room 3" class="mx-auto mb-4 rounded-lg" />
            <h3 class="text-xl font-semibold mb-2">
              Dịch vụ chuyên nghiệp – Giá cả hợp lý
            </h3>
            <p>
              Đội ngũ nhân viên thân thiện, phục vụ nhanh chóng. Giá phòng và
              combo đồ ăn, nước uống được thiết kế hợp lý – vừa túi tiền, lại
              nhiều ưu đãi hấp dẫn.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pricing Section with Background Image -->
  <section id="pricing" class="bg-cover bg-center relative 2xl:aspect-[16/6] xl:aspect-[16/8] lg:aspect-[16/10]"
    style="background-image: url('/assets/img/NKO_0994.webp')">
    <div class="bg-black bg-opacity-60 py-16 px-5 h-full">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Chương trình khuyến mãi
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-lg:gap-4 text-black">
          <div class="p-6 rounded-lg text-center background-gradient">
            <p class="text-2xl font-bold mb-4">Ưu đãi giờ vàng</p>
            <p>
              Từ 12h đến 18h mỗi ngày, khách hàng được
              <b>giảm 50% giờ hát</b>.Ưu đãi áp dụng xuyên suốt các ngày trong
              tuần
            </p>
          </div>
          <div class="p-6 rounded-lg text-center background-gradient">
            <p class="text-2xl font-bold mb-4">Giảm ngay 10% khi checkin</p>
            <p>
              Check-in tại quán, đánh giá 5 sao và để lại 5 bình luận trên
              Google Maps để nhận <b>giảm 10% trên tổng bill</b>. Lan tỏa trải
              nghiệm tuyệt vời cùng bạn bè và nhận quà liền tay!
            </p>
          </div>
          <div class="p-6 rounded-lg text-center background-gradient">
            <p class="text-2xl font-bold mb-4">Thẻ Siêu VIP</p>
            <p>Miễn phí giờ hát từ 12h đến 24h mỗi ngày</p>
            <p>Tặng bánh kem và trang trí phòng khi tổ chức sinh nhật</p>
            <p>
              Chiết khấu 10% tổng bill mỗi lần giới thiệu khách đến check-in
              và đánh giá 5 sao
            </p>
            <p>Cấp mã số ưu tiên khi đặt phòng</p>
            <p>Hiệu lực sử dụng: 3 tháng</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Google Maps Section -->
  <section id="location" class="bg-cover bg-center" style="background-image: url('/assets/img/NKO_1090.webp')">
    <div class="bg-black bg-opacity-60 py-16 px-5 h-full">
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
</template>