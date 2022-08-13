<template>
	<Head>
		<Link rel="preconnect" href="https://derpicdn.net" />
	</Head>
	<div class="bg-cover bg-center" :style="{ backgroundImage: `url(${image.image})` }">
		<div class="h-full text-center backdrop-blur-2xl" :style="{ backgroundColor: backgroundColour ?? `#ffffff22` }">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { Image } from "~/composables/use_random_bg_image";

	defineProps<{
		image: Image;
		backgroundColour?: string;
	}>();
</script>
