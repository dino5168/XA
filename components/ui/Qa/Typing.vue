<template>
    <div class="lyrics-container text-blue-800 font-bold text-2xl">
        <div v-for="(line, lineIndex) in displayLines" :key="lineIndex">
            <span v-for="(char, charIndex) in line.chars" :key="charIndex"
                :style="{ color: line.color, visibility: char.visible ? 'visible' : 'hidden' }">{{ char.content
                }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, reactive, watch } from "vue";

const typingInterval = ref<number | null>(null);

// 定義接口
interface ContentItem {
    text: string;
    color: string;
}

interface Typeing {
    color?: string;
    contentData?: ContentItem[];
    typingSpeed?: number;
    repeat?: boolean;
    pauseBeforeRepeat?: number;
}

// 使用 withDefaults 並為非基本類型提供工廠函數
const props = withDefaults(
    defineProps<Typeing>(),
    {
        color: 'blue',
        contentData: () => [
            { text: "Welcome Your Logo", color: "green" },
        ],
        typingSpeed: 100,
        repeat: false,
        pauseBeforeRepeat: 2000
    }
);

// 為每一行文字創建字符數組，每個字符都有可見性標誌
const displayLines = reactive(
    props.contentData.map(line => ({
        color: line.color,
        chars: Array.from(line.text).map(char => ({
            content: char,
            visible: false
        }))
    }))
);

function typeEffect(delay: number) {
    let lineIndex = 0;
    let charIndex = 0;
    let totalCharsShown = 0;
    const totalChars = displayLines.reduce((sum, line) => sum + line.chars.length, 0);

    // 清除先前可能存在的計時器
    if (typingInterval.value) {
        clearInterval(typingInterval.value);
    }

    // 重置所有字符的可見性
    displayLines.forEach(line => {
        line.chars.forEach(char => {
            char.visible = false;
        });
    });

    // 使用 window.setInterval 並儲存引用以便後續清除
    typingInterval.value = window.setInterval(() => {
        // 確保索引在有效範圍內
        if (lineIndex < displayLines.length) {
            const currentLine = displayLines[lineIndex];

            if (charIndex < currentLine.chars.length) {
                // 顯示當前字符
                currentLine.chars[charIndex].visible = true;
                charIndex++;
                totalCharsShown++;
            } else {
                // 移至下一行
                lineIndex++;
                charIndex = 0;
            }
        }

        // 當所有字符都顯示完畢時
        if (totalCharsShown >= totalChars) {
            if (typingInterval.value) {
                clearInterval(typingInterval.value);
                typingInterval.value = null;

                // 如果啟用了重複播放，則在暫停後重新開始
                if (props.repeat) {
                    setTimeout(() => {
                        typeEffect(delay);
                    }, props.pauseBeforeRepeat);
                }
            }
        }
    }, delay);
}

// 監聽 contentData 變化，重新生成 displayLines
watch(() => props.contentData, (newContentData) => {
    // 清除現有的打字效果
    if (typingInterval.value) {
        clearInterval(typingInterval.value);
        typingInterval.value = null;
    }

    // 更新 displayLines
    const newDisplayLines = newContentData.map(line => ({
        color: line.color,
        chars: Array.from(line.text).map(char => ({
            content: char,
            visible: false
        }))
    }));

    // 更新 reactive 對象
    displayLines.splice(0, displayLines.length, ...newDisplayLines);

    // 重新啟動打字效果
    typeEffect(props.typingSpeed);
}, { deep: true });

// 監聽 repeat 屬性變化
watch(() => props.repeat, (newValue, oldValue) => {
    // 如果從非重複改為重複且目前沒有運行中的計時器（已完成一輪播放）
    if (newValue && !oldValue && !typingInterval.value) {
        // 重新啟動打字效果
        typeEffect(props.typingSpeed);
    }
});

onMounted(() => {
    typeEffect(props.typingSpeed);
});

// 組件卸載前清除計時器，防止內存洩漏
onBeforeUnmount(() => {
    if (typingInterval.value) {
        clearInterval(typingInterval.value);
        typingInterval.value = null;
    }
});
</script>

<style scoped>
.lyrics-container {
    line-height: 1.8;
    padding: 0.25rem;
}
</style>