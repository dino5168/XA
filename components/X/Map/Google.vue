<template>
    <div :class="mapContainerClasses">
        <iframe :class="mapFrameClasses" :src="googleMapSrc" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { cva } from "@/utils";

// Type definition for props
interface GoogleMapProps {
    latitude?: string | number;
    longitude?: string | number;
    zoom?: string | number;
    width?: string;
    height?: string;
}

// Type-safe variant definition
type WidthVariant = 'default' | 'w-full' | 'w-1/2' | 'w-3/4' | 'w-auto';
type HeightVariant = 'default' | 'h-full' | 'h-[20rem]' | 'h-[24rem]' | 'h-auto';

// Default function for generating Google Maps embed URL
function generateGoogleMapEmbedUrl(
    latitude: number,
    longitude: number,
    zoomLevel: number
): string {
    return `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoomLevel}&output=embed`;
}

// Props with proper default values and type conversion
const props = withDefaults(defineProps<GoogleMapProps>(), {
    latitude: "24.9423966",
    longitude: "121.3689175",
    zoom: "17",
    width: "w-full",
    height: "h-[20rem]"
});

// Compute map source URL
const googleMapSrc = computed(() => {
    const latitude = Number(props.latitude);
    const longitude = Number(props.longitude);
    const zoomLevel = Number(props.zoom);
    return generateGoogleMapEmbedUrl(latitude, longitude, zoomLevel);
});

// Optimized styles using cva with explicit variant typing
const mapContainerClasses = computed(() =>
    cva("relative overflow-hidden", {
        variants: {
            width: {
                default: 'w-full',
                w_full: 'w-full',
                w_1_2: 'w-1/2',
                w_3_4: 'w-3/4',
                w_auto: 'w-auto'
            },
            height: {
                default: 'h-[500px]',
                h_full: 'h-full',
                h_400: 'h-[28rem]',
                h_500: 'h-[32rem]',
                h_auto: 'h-auto'
            }
        },
        defaultVariants: {
            width: 'default',
            height: 'default'
        }
    })({
        width: "default",
        height: "default"
    })
);

const mapFrameClasses = computed(() =>
    cva("border-0", {
        variants: {
            width: {
                default: 'w-full',
                w_full: 'w-full',
                w_1_2: 'w-1/2',
                w_3_4: 'w-3/4',
                w_auto: 'w-auto'
            },
            height: {
                default: 'h-[500px]',
                h_full: 'h-full',
                h_400: 'h-[400px]',
                h_500: 'h-[500px]',
                h_auto: 'h-auto'
            }
        },
        defaultVariants: {
            width: 'default',
            height: 'default'
        }
    })({
        width: "default",
        height: "default"
    })
);
</script>

<style scoped>
/* Custom styles can be added here */
</style>