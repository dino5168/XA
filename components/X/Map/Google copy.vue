<template>
    <div class="map-section">
        <iframe :style="iframeStyle" :src="googleMapSrc" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 生成 Google 地圖嵌入 URL 並加入標記與縮放級別
function generateGoogleMapEmbedUrl(latitude: number, longitude: number, zoomLevel: number): string {
    const baseUrl = "https://www.google.com/maps/embed?";

    // 修改 'pb' 參數來設置標記與縮放級別
    const params = new URLSearchParams({
        pb: `!1m17!1m12!1m3!1d12097.433213460943!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!${zoomLevel}!4v1634557760279&z=${zoomLevel}`,
        q: `${latitude},${longitude}`, // 在地圖上加標記
    });

    return baseUrl + params.toString();
}

// 設定 Taipei 的地圖 URL
const taipeiMapUrl = generateGoogleMapEmbedUrl(25.033964, 121.5644524, 18);

// 使用 ref 存儲地圖的嵌入 URL
const googleMapSrc = ref(taipeiMapUrl)

// 設定 iframe 的樣式
const iframeStyle = ref({
    border: "0",
    width: "100%",
    height: "350px",
})
</script>

<style scoped>
/* 可以在這裡加入額外的樣式 */
</style>
