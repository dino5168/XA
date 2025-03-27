<template>
    <div class="h-[32rem]">

        <div id="map" class="w-full h-full"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';

definePageMeta({
    ssr: false
});

onMounted(async () => {
    const L = await import('leaflet');

    if (typeof window !== 'undefined') {
        const map = L.map('map', {
            center: [25.0330, 121.5654],
            zoom: 13,
            zoomControl: false, // 禁用缩放控件
            attributionControl: false // 移除属性标签
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        L.marker([25.0330, 121.5654]).addTo(map)
            .bindPopup('台北 101').openPopup();
    }
});
</script>