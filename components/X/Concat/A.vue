<script setup lang="ts">
import { ref } from "vue";

const form = ref({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const submitForm = async () => {
    loading.value = true;
    successMessage.value = "";
    errorMessage.value = "";

    try {
        // 這裡應該替換成實際的 API 請求
        await new Promise((resolve) => setTimeout(resolve, 1000));
        successMessage.value = "Your message has been sent. Thank you!";
        form.value = { name: "", email: "", subject: "", message: "" };
    } catch (error) {
        errorMessage.value = "Failed to send message. Please try again later.";
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <section id="contact" class="py-12 bg-gray-100">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <h2 class="text-2xl font-bold text-center mb-6">Contact Us</h2>
                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input v-model="form.name" type="text" placeholder="Your Name" required
                            class="-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <input v-model="form.email" type="email" placeholder="Your Email" required
                            class="input-field" />
                    </div>
                    <input v-model="form.subject" type="text" placeholder="Subject" required
                        class="-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4" />
                    <textarea v-model="form.message" rows="5" placeholder="Message" required
                        class="input-field mt-4"></textarea>
                    <div v-if="loading" class="text-center text-gray-500 mt-3">Loading...</div>
                    <div v-if="successMessage" class="text-green-600 text-center mt-3">{{ successMessage }}</div>
                    <div v-if="errorMessage" class="text-red-600 text-center mt-3">{{ errorMessage }}</div>
                    <div class="text-center mt-6">
                        <button type="submit"
                            class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700">Send
                            Message</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
