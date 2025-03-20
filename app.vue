<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { LazyUiLibXaAlertDialog, LazyUiLibXaLoading } from '#components';
import { LazyUiLibXaButton } from '#components';
import { UiLibXaAccordion } from '#components';

import { UiLibXaDialog } from '#components';
import { UiLibXaDropMenu } from '#components';
import { UiLibXaSelect } from '#components';
import { UiLibXaTab } from '#components';
import { UiLibXaNavMenu } from '#components';
const props = withDefaults(defineProps<PrimitiveProps>(), {
  as: 'span'
})
const isShow = ref(false)
const onDemo = () => {

  isShow.value = !isShow.value;
  setTimeout(() => {
    isShow.value = !isShow.value;
  }, 2000);

}
</script>

<template>
  <!-- Now this element will be rendered as `span` by default -->
  <Primitive v-bind="props" class="text-blue-500 font-bold shadow-sm px-1 py-2 cursor-pointer">
    span element
  </Primitive>
  <UiLibXaNavMenu></UiLibXaNavMenu>
  <LazyUiLibXaLoading :show="isShow" color="#24282e">
  </LazyUiLibXaLoading>
  <LazyUiLibXaButton buttonStyle="success" @click="onDemo">XaButton</LazyUiLibXaButton>
  <LazyUiLibXaAlertDialog></LazyUiLibXaAlertDialog>
  <UiLibXaAccordion>
  </UiLibXaAccordion>

  <UiLibXaDialog></UiLibXaDialog>
  <UiLibXaDropMenu></UiLibXaDropMenu>
  <UiLibXaSelect></UiLibXaSelect>
  <UiLibXaTab></UiLibXaTab>
</template>
