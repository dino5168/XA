<template>
    <section class="h-[12rem] bg-blue-500">


    </section>
    <section class="h-[10rem] cursor-crosshair">
        <XMouseA></XMouseA>



    </section>
    <section class="lg:h-[20rem] sm:h-[40rem]">
        <div class="grid sm:grid-cols-1 lg:grid-cols-2">
            <XCollapseB height="160px" :tabs="[
                { label: '產品介紹', content: '沉香是瑞香科沉香屬和擬沉香屬植物受到自然因素（如雷劈、火燒、蟲蛀等）或人為傷害（如砍傷、打洞、接菌等）時，產生的含有樹脂的芳香木材[1]。作為世界名貴天然香料，沉香被譽為「沉檀龍麝」四大名香之首' },
                { label: '產品介紹', content: '沉香是瑞香科沉香屬和擬沉香屬植物受到自然因素（如雷劈、火燒、蟲蛀等）或人為傷害（如砍傷、打洞、接菌等）時，產生的含有樹脂的芳香木材[1]。作為世界名貴天然香料，沉香被譽為「沉檀龍麝」四大名香之首' },
                { label: '公司位置', content: '這是第二個標籤的內容,沉香是瑞香科沉香屬和擬沉香屬植物受到自然因素（如雷劈、火燒、蟲蛀等）或人為傷害（如砍傷、打洞、接菌等）時，產生的含有樹脂的芳香木材[1]。作為世界名貴天然香料，沉香被譽為「沉檀龍麝」四大名香之首,這是第二個標籤的內容,沉香是瑞香科沉香屬和擬沉香屬植物受到自然因素（如雷劈、火燒、蟲蛀等）或人為傷害（如砍傷、打洞、接菌等）時，產生的含有樹脂的芳香木材[1]。作為世界名貴天然香料，沉香被譽為「沉檀龍麝」四大名香之首這是第二個標籤的內容,沉香是瑞香科沉香屬和擬沉香屬植物受到自然因素（如雷劈、火燒、蟲蛀等）或人為傷害（如砍傷、打洞、接菌等）時，產生的含有樹脂的芳香木材[1]。作為世界名貴天然香料，沉香被譽為「沉檀龍麝」四大名香之首,這是第二個標籤的內容,沉香是瑞香科沉香屬和擬沉香屬植物受到自然因素（如雷劈、火燒、蟲蛀等）或人為傷害（如砍傷、打洞、接菌等）時，產生的含有樹脂的芳香木材[1]。作為世界名貴天然香料，沉香被譽為「沉檀龍麝」四大名香之首' }
            ]" />

            <XCollapseA>
                沉香是瑞香科沉香屬和擬沉香屬植物受到自然因素（如雷劈、火燒、蟲蛀等）或人為傷害（如砍傷、打洞、接菌等）時，產生的含有樹脂的芳香木材[1]。作為世界名貴天然香料，沉香被譽為「沉檀龍麝」四大名香之首[
            </XCollapseA>

        </div>

    </section>

    <XSectionContact></XSectionContact>


    <XSection>


    </XSection>

    <XSectionHero>
    </XSectionHero>
    <XSection id="companyLogo">
        <div class="border-2 border-blue-500">邊框 2px 黑色</div>
        <button class="border-blue-500 bg-amber-500 p-1 rounded-full">Text</button>
        <h1>Section 01</h1>
        <button @click="onAlert">alert</button>
        <button @click="onAlert"
            class="border-2 border-blue-500 rounded-lg cursor-pointer text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
            Message
        </button>

    </XSection>
    <XSection id="companyLogo">
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
            <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/Designer.jpeg" alt="" />
            <div class="space-y-2 text-center sm:text-left">
                <div class="space-y-0.5">
                    <p class="text-lg font-semibold text-black">Erin Lindford</p>
                    <p class="font-medium text-gray-500">Product Engineer</p>
                </div>
                <button
                    class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
                    Message
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
            <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/Designer.jpeg" alt="" />
            <div class="space-y-2 text-center sm:text-left">
                <div class="space-y-0.5">
                    <p class="text-lg font-semibold text-black">Erin Lindford</p>
                    <p class="font-medium text-gray-500">Product Engineer</p>
                </div>
                <button
                    class="border-purple-200 text-purple-600 hover:cursor-pointer hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
                    Message
                </button>
            </div>
        </div>

    </XSection>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { XCard } from '#components';
import { textCorleMap } from '~/components/X/typemap';
import { typeClsss } from "~/components/X/typeClsss"
const onAlert = () => {


    alert(typeClsss.getTextColor("blue", "100"));
}
definePageMeta({
    layout: "default-no"
})
</script>