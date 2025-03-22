<!-- Loading.vue -->

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  // 控制 loading 顯示
  show?: boolean;
  // 背景透明度 0-1
  opacity?: number;
  // loading 大小
  size?: number;
  // loading 顏色
  color?: string;
  // 是否顯示遮罩層
  mask?: boolean;
}

// 定義預設值
const props = withDefaults(defineProps<Props>(), {
  show: false,
  opacity: 0.9,
  size: 50,
  color: '#3498db',
  mask: true
});

// 提供給父組件的方法
const isLoading = ref(props.show);

// 導出方法給父組件使用
defineExpose({
  isLoading
});
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="global-loading" :style="{
      background: mask ? `rgba(188, 188, 188, ${opacity})` : 'transparent'
    }">
      <div class="loader" :style="{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${size / 8}px`,
        borderTopColor: color,
      }"></div>
    </div>
  </Transition>
</template>

<style scoped>
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.loader {
  border-style: solid;
  border-color: #f3f3f3;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* 過渡動畫 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>