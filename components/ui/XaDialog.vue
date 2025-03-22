<template>
    <button @click="openModal" class="open-btn">打開對話框</button>

    <!-- 使用 Teleport 把 Modal 移動到 body 下的 #modal-container -->
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="showModal" class="modal-overlay" @click="closeModalOnOverlay">
                <div class="modal" @click.stop>
                    <h2>這是一個對話框</h2>
                    <p>這裡的內容被傳送到了 body 元素下。</p>
                    <button @click="closeModal" class="close-btn">關閉</button>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const showModal = ref(false);

// 定義開啟與關閉模態框的函數
const openModal = () => {
    showModal.value = true;
    document.body.style.overflow = 'hidden'; // 防止背景滾動
};

const closeModal = () => {
    showModal.value = false;
    document.body.style.overflow = ''; // 恢復背景滾動
};

// 點擊遮罩層關閉模態框
const closeModalOnOverlay = (event: MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
        closeModal();
    }
};

// 添加ESC鍵關閉模態框功能
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && showModal.value) {
        closeModal();
    }
};

// 生命週期鉤子
onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = ''; // 確保組件卸載時恢復滾動
});
</script>

<style scoped>
.open-btn,
.close-btn {
    padding: 10px 15px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
}

.open-btn {
    background-color: #4CAF50;
    color: white;
}

.close-btn {
    background-color: #f44336;
    color: white;
}

/* 模態框樣式 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 90%;
    width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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