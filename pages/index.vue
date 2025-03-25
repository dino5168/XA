<template>
    <h1>Header 01</h1>
    <a href="#">About</a>

    <a href="#">
        <XBadge pattern="danger">danger</XBadge>
    </a>
    <XBadgeIcon spaceX=""></XBadgeIcon>
    <XBadgeIcon pattern="success" name="fa fa-home">已完成</XBadgeIcon>
    <XBadgeIcon pattern="danger" name="fa fa-home">注意</XBadgeIcon>
    <XBadgeIcon pattern="warning" name="fa fa-home">已完成</XBadgeIcon>
    <XBadgeRound pattern="success">100</XBadgeRound>

    <XBadgeNumber pattern="success" size="xs">完成一個元件</XBadgeNumber>

    <XBadge v-for="n in 1000" :key="n">注意</XBadge>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
definePageMeta({
    layout: "default-no"
})
</script>