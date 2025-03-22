<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AsyncComponent from './YaAsyncComponent.vue';

interface User {
    id: number;
    name: string;
    email: string;
}

const users = ref<User[]>([]);
const isLoaded = ref(false);

// 模擬 API 調用
const fetchUsers = async (): Promise<User[]> => {
    // 在實際應用中，這裡會調用真實的 API
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, name: '張三', email: 'zhang@example.com' },
                { id: 2, name: '李四', email: 'li@example.com' },
                { id: 3, name: '王五', email: 'wang@example.com' }
            ]);
        }, 1500);
    });
};

const handleDataLoaded = async () => {
    try {
        users.value = await fetchUsers();
        isLoaded.value = true;
    } catch (error) {
        console.error('加載數據失敗', error);
    }
};
</script>

<template>
    <div class="data-loader">
        <h2>用戶數據</h2>
        <AsyncComponent loadingText="正在獲取用戶數據..." successText="用戶數據已加載完成" @loaded="handleDataLoaded">
            <div v-if="isLoaded" class="user-list">
                <div v-if="users.length === 0" class="no-data">
                    沒有找到用戶數據
                </div>
                <div v-else>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>姓名</th>
                                <th>電子郵件</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AsyncComponent>
    </div>
</template>

<style scoped>
.data-loader {
    max-width: 600px;
    margin: 0 auto;
}

.user-list {
    width: 100%;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

th,
td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #eee;
}

th {
    background-color: #f8f9fa;
    font-weight: bold;
}

tr:hover {
    background-color: #f5f5f5;
}

.no-data {
    padding: 20px;
    text-align: center;
    color: #666;
}
</style>