<template>
    <header class="fixed top-0 left-0 w-full bg-black bg-opacity-70 z-10">
        <div class="mx-auto lg:px-[70px] px-4 py-4 flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center">
                <img src="/assets/img/logo_4x.png" alt="Karaoke Lounge Logo" class="h-20 max-sm:h-10" />
            </div>
            <!-- Marquee -->
            <div class="marquee mx-4 flex bg-transparent max-w-4xl">
                <div class="marquee-content w-full dayland-text">
                    Nơi Cảm Xúc Thăng Hoa
                </div>
            </div>
            <!-- Navbar -->
            <nav class="flex gap-4 max-sm:hidden">
                <a v-for="item in navItems" :key="item.label" :href="item.href" class="navigater-link transition duration-300">{{ item.label }}</a>
            </nav>

            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button ref="menuBtn" @click="toggleMenu" class="text-white focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div ref="mobileMenu" v-show="isMenuOpen" class="md:hidden bg-black bg-opacity-90 p-4">
            <a v-for="item in navItems" :key="item.label" :href="item.href" class="block py-2 navigater-link">{{ item.label }}</a>
        </div>
        <!-- Navbar content -->
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue'

const isMenuOpen = ref(false)
const menuBtn = useTemplateRef<HTMLButtonElement>('menuBtn') // Reference to the menu button from vue 3.5 >
const mobileMenu = ref<HTMLElement | null>(null) // Vue 3.0 – 3.4
const navItems = ref([{ label: 'Trang Chủ', href: '#home' }, { label: 'Giới Thiệu', href: '#features' }, { label: 'Khuyến Mãi', href: '#pricing' }, { label: 'Bản Đồ', href: '#location' }])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = (event: Event) => {
  if (
    menuBtn.value &&
    mobileMenu.value &&
    !menuBtn.value.contains(event.target as Node) &&
    !mobileMenu.value.contains(event.target as Node)
  ) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})
</script>