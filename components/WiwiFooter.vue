<template>
	<div class="flex flex-row">
		<div>site &copy; 2021 Autumn Meadow, all artwork are copyright their respective authors</div>
		<div class="flex-grow" />
		<div v-if="image">header background image source: <wiwi-link :href="image.source">{{ image.source }}</wiwi-link></div>
	</div>
</template>

<script setup lang="ts">
	import type { Image } from "../composables/use_random_bg_image";

	defineProps<{
		image?: Image;
	}>();
</script>
