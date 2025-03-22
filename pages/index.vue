<script lang="ts" setup>
const onClick = () => {
    alert("hello")
}
const handleSubmit = () => {
    alert(username.value);
}
const username = ref('dino')
</script>
<template>
    <i class="fa-solid fa-file"></i>
    <i class="fa-solid fa-user"></i>
    <UiXaBadge>Hello world</UiXaBadge>
    <UiXaBadge color="red" decoration="underline">Hello world</UiXaBadge>
    <UiXaBadge color="blue" decoration="underline" size="sm">Hello world</UiXaBadge>

    <UiXaBadge color="green">Hello world</UiXaBadge>
    <UiXaBadge color="green" size="md">Hello world</UiXaBadge>


    <NuxtLink to="/ui/alert">Alert</NuxtLink>
    <UiXaIcon name="fa-solid fa-user"></UiXaIcon>
    <UiXaIcon name="fa-solid fa-file"></UiXaIcon>

</template>
