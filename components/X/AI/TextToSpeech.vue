<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useSpeechSynthesis } from '@vueuse/core';

// Reactive state
const text = ref("Once upon a time, in a small village, there lived a curious boy named Tom. One day, while exploring the woods near his home, he stumbled upon a hidden cave. Inside, he found a glowing stone that seemed to pulse with energy. When he touched it, a warm light surrounded him, and he suddenly understood the language of animals. From that day on, Tom became the village's secret guardian, helping creatures in need and keeping the balance of nature. The villagers never knew how he did it, but they trusted him completely.");
const voices = ref<SpeechSynthesisVoice[]>([]);
const selectedVoiceName = ref<string>('');

// Fetch voices on component mount
onMounted(() => {
    const loadVoices = () => {
        voices.value = window.speechSynthesis.getVoices();

        const defaultVoice = voices.value.find(voice =>
            voice.lang.startsWith('zh-') || voice.lang.startsWith('en-')
        );

        if (defaultVoice) {
            selectedVoiceName.value = defaultVoice.name;
        }
    };

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();
});

// Computed property to get the selected voice
const selectedVoice = computed(() =>
    voices.value.find(voice => voice.name === selectedVoiceName.value) || null
);

// Pitch and rate controls
const pitch = ref(1);
const rate = ref(1);

// Correctly use useSpeechSynthesis
const { speak, isPlaying } = useSpeechSynthesis(text, {
    voice: selectedVoice.value || undefined,
    pitch: pitch.value,
    rate: rate.value,
    lang: selectedVoice.value?.lang || 'zh-TW'
});

// Methods
const speakWithSettings = () => {
    // Directly call speak without additional configuration
    speak();
};

const cancelSpeech = () => {
    window.speechSynthesis.cancel();
};
</script>

<template>
    <div class="text-to-speech-container">
        <textarea v-model="text" placeholder="輸入要朗讀的文字" rows="4"></textarea>

        <div class="controls">
            <select v-model="selectedVoiceName">
                <option v-for="voice in voices" :key="voice.name" :value="voice.name">
                    {{ voice.name }} ({{ voice.lang }})
                </option>
            </select>

            <div class="speech-controls">
                <label>
                    音調 (Pitch):
                    <input type="range" v-model="pitch" min="0.1" max="2" step="0.1" />
                    {{ pitch.toFixed(1) }}
                </label>

                <label>
                    速度 (Rate):
                    <input type="range" v-model="rate" min="0.1" max="2" step="0.1" />
                    {{ rate.toFixed(1) }}
                </label>
            </div>

            <div class="action-buttons">
                <button @click="speakWithSettings" :disabled="isPlaying">
                    朗讀
                </button>
                <button @click="cancelSpeech" :disabled="!isPlaying">
                    停止
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-to-speech-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
}

textarea {
    width: 100%;
    margin-bottom: 15px;
    resize: vertical;
}

.controls {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.speech-controls {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.action-buttons {
    display: flex;
    gap: 10px;
}

label {
    display: flex;
    align-items: center;
    gap: 10px;
}

input[type="range"] {
    flex-grow: 1;
}

.status {
    margin-top: 15px;
    text-align: center;
    font-style: italic;
}
</style>